import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ setUser }) => {
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  // Fetch user details on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      const res = await fetch('http://localhost:5000/api/users/me', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setUserDetails(data);
        setUser && setUser(data);
      } else {
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate, setUser]);

  const handleEdit = async () => {
    if (isEditing) {
      try {
        let updatedDetails = { ...userDetails };
        if (previewImage) {
          updatedDetails.profilePic = previewImage;
        }
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/users/edit', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(updatedDetails),
        });
        const data = await response.json();
        if (response.ok) {
          setUserDetails(data);
          setUser && setUser(data);
          setPreviewImage(null);
          setIsEditing(false);
        } else {
          throw new Error(data.error || 'Failed to update profile');
        }
      } catch (error) {
        alert(error.message || 'Failed to update profile. Please try again.');
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleImageClick = () => {
    if (isEditing) fileInputRef.current?.click();
  };

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const MAX_DIM = 800;
          if (width > height && width > MAX_DIM) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          } else if (height > MAX_DIM) {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5000000) {
        alert('Image size should be less than 5MB');
        return;
      }
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (JPEG, PNG, or GIF)');
        return;
      }
      try {
        const compressed = await compressImage(file);
        setPreviewImage(compressed);
      } catch {
        alert('Failed to process image. Try a different image.');
      }
    }
  };

  const handleDeletePhoto = () => {
    setPreviewImage(null);
    setUserDetails(prev => ({ ...prev, profilePic: '' }));
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/users/delete', {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          alert('Account deleted successfully.');
          localStorage.removeItem('token');
          setUser && setUser(null);
          window.location.href = '/';
        } else {
          alert(data.error || 'Failed to delete account.');
        }
      } catch (err) {
        alert('Failed to delete account.');
      }
    }
  };

  if (!userDetails) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-[#EDE9F7] to-[#D6C3F8] flex items-center justify-center px-2 sm:px-4 md:px-8 py-8 overflow-y-auto">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-[#BFA8F2]/30 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-4 pt-10 sm:p-8 sm:pt-8 md:p-10">
        <div className="flex flex-col items-center">
          <div className="relative group mb-4 flex flex-col items-center w-full">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div
              className={`relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#9558ba] ${isEditing ? 'cursor-pointer hover:opacity-90' : ''} mx-auto`}
              onClick={handleImageClick}
            >
              <img
                className="w-full h-full object-cover"
                src={previewImage || userDetails.profilePic || '/user_icon.jpg'}
                alt="Profile"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm">
                    {(previewImage || userDetails.profilePic) ? 'Change Photo' : 'Add Photo'}
                  </span>
                </div>
              )}
            </div>
            {isEditing && (
              <button
                type="button"
                className="mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#9558ba] to-white/30 text-white text-xs shadow hover:bg-red-600 transition"
                onClick={handleDeletePhoto}
                style={{ display: 'block', margin: '0 auto' }}
              >
                Delete Photo
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
            <div>
              <label className="text-xs text-gray-500">First Name</label>
              {isEditing ? (
                <input type="text" name="firstName" value={userDetails.firstName} onChange={handleChange} className="w-full text-black p-2 border rounded" />
              ) : (
                <div className="text-[#2C2C2C] font-semibold break-words">{userDetails.firstName}</div>
              )}
            </div>
            <div>
              <label className="text-xs text-gray-500">Last Name</label>
              {isEditing ? (
                <input type="text" name="lastName" value={userDetails.lastName} onChange={handleChange} className="w-full text-black p-2 border rounded" />
              ) : (
                <div className="text-[#2C2C2C] font-semibold break-words">{userDetails.lastName}</div>
              )}
            </div>
            <div>
              <label className="text-xs text-gray-500">Email</label>
              <div className="text-gray-700 break-words">{userDetails.email}</div>
            </div>
            <div>
              <label className="text-xs text-gray-500">Date of Birth</label>
              {isEditing ? (
                <input type="date" name="dob" value={userDetails.dob} onChange={handleChange} className="w-full  text-black p-2 border rounded" />
              ) : (
                <div className="text-[#2C2C2C]">{userDetails.dob}</div>
              )}
            </div>
            <div>
              <label className="text-xs text-gray-500">Mobile Number</label>
              {isEditing ? (
                <input type="tel" name="mobileNumber" value={userDetails.mobileNumber} onChange={handleChange} className="w-full  text-black p-2 border rounded" />
              ) : (
                <div className="text-[#2C2C2C]">{userDetails.mobileNumber}</div>
              )}
            </div>
            <div>
              <label className="text-xs text-gray-500">Qualification</label>
              {isEditing ? (
                <input type="text" name="qualification" value={userDetails.qualification} onChange={handleChange} className="w-full  text-black p-2 border rounded" />
              ) : (
                <div className="text-[#2C2C2C]">{userDetails.qualification}</div>
              )}
            </div>
            <div>
              <label className="text-xs text-gray-500">Branch</label>
              {isEditing ? (
                <input type="text" name="branch" value={userDetails.branch} onChange={handleChange} className="w-full  text-black p-2 border rounded" />
              ) : (
                <div className="text-[#2C2C2C]">{userDetails.branch}</div>
              )}
            </div>
            <div>
              <label className="text-xs text-gray-500">Pass Out Year</label>
              {isEditing ? (
                <input type="text" name="passOutYear" value={userDetails.passOutYear} onChange={handleChange} className="w-full  text-black p-2 border rounded" />
              ) : (
                <div className="text-[#2C2C2C]">{userDetails.passOutYear}</div>
              )}
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-gray-500">College Name</label>
              {isEditing ? (
                <input type="text" name="collegeName" value={userDetails.collegeName} onChange={handleChange} className="w-full  text-black p-2 border rounded" />
              ) : (
                <div className="text-[#2C2C2C] break-words">{userDetails.collegeName}</div>
              )}
            </div>
          </div>
          <div className="mt-6 w-full flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={handleEdit}
              className="bg-gradient-to-r from-[#9558ba] to-white/30 text-black px-8 py-2 rounded-full shadow hover:bg-blue-500 transition w-full sm:w-auto"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
          {/* Delete Account Section */}
          {!isEditing && (
            <div className="w-full flex flex-col items-center mt-4">
              <button
                className="bg-gradient-to-r from-[#9558ba] to-white/30 text-black px-8 py-2 rounded-full shadow hover:bg-red-600 transition w-full sm:w-auto"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 