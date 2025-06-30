import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaClockRotateLeft } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const EditCourse = () => {
  const baseURL=import.meta.env.VITE_BACKEND_URL;
  const { title } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [dragActive, setDragActive] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const [message,setMessage]=useState(null);
  const [newLesson, setNewLesson] = useState("");
  const [newExtra, setNewExtra] = useState("");
  const [newRole, setNewRole] = useState("");
  const [updatedCourse, setUpdatedCourse] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
    lessons: [],
    extras: [],
    careers: {
      roles: [],
      package: ""
    }
  });

  useEffect(() => {
    axios
      .get(`${baseURL}/courses/${title}`)
      .then((res) => {
        setCourse(res.data);
        setUpdatedCourse({
          title: res.data.title || "",
          subtitle: res.data.subtitle || "",
          description: res.data.description || "",
          image: res.data.image || "",
          lessons: res.data.lessons || [],
          extras: res.data.extras || [],
          careers: res.data.careers || { roles: [], package: "" }
        });
      })
      .catch((err) => {
        console.log(err);
        setError("Course not found");
      });
  }, [title]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedCourse((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange({ target: { files: e.dataTransfer.files } });
    }
  }

  
  if (error) return <div>{error}</div>;
  if (!course) return <div className="p-10 w-full"><Skeleton height={500} count={1} /></div>;
  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const formData = new FormData();
        
        // Append regular fields
        formData.append('title', updatedCourse.title);
        formData.append('subtitle', updatedCourse.subtitle);
        formData.append('description', updatedCourse.description);
        formData.append('duration', updatedCourse.careers.package); // Assuming you're using `package` for duration

        // Append complex fields as stringified JSON
        formData.append('lessons', JSON.stringify(updatedCourse.lessons));
        formData.append('extras', JSON.stringify(updatedCourse.extras));
        formData.append('careers', JSON.stringify(updatedCourse.careers));

        // Append image file if updated
        if (imageFile) {
        formData.append('image', imageFile);
        }

        // Send PUT/PATCH request to your backend
        const response = await axios.put(
        `${baseURL}/courses/edit/${course._id}`, 
        formData,
        {
            headers: {
            'Content-Type': 'multipart/form-data',
            }
        }
        );
        setMessage('Course Updated Successfully.Check it in the courses tab.')
    } catch (err) {
        setMessage("Error updating the course.Please try again")
    }
    }

  return (
    <div className="flex flex-col w-full justify-center items-start p-10 pt-20 lg:p-20 gap-10 lg:gap-16">
        <div className="flex flex-col justify-center items-center w-full font-semibold text-green-600">
            <p className="text-4xl">Edit Course</p>
            <p className="tetx-md">Click the area you want to update</p>
        </div>
      {/* Header */}
      <div className="flex flex-col gap-1 w-full">
        <input
          type="text"
          value={updatedCourse.title}
          className="text-xl lg:text-4xl font-bold underline text-violet-900 border border-dashed border-gray-500 focus:outline-none px-4 py-2 rounded-xl focus:bg-gray-200"
          required
          onChange={(e) =>
            setUpdatedCourse((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          type="text"
          value={updatedCourse.subtitle}
          className="text-sm lg:text-md border border-dashed border-gray-500 focus:outline-none px-4 py-2 rounded-xl focus:bg-gray-200"
          required
          onChange={(e) =>
            setUpdatedCourse((prev) => ({ ...prev, subtitle: e.target.value }))
          }
        />
      </div>

      {/* Image & Description */}
      <div className="flex gap-5 lg:gap-10 lg:text-lg flex-col md:justify-center md:items-center lg:flex-row w-full">
        <div
          className={`lg:w-[50%] flex flex-col items-center justify-center border-dashed border-2 border-gray-400 p-4 rounded-3xl ${
            dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
        >
          <label
            htmlFor="image-upload"
            className="w-[80%] flex flex-col justify-center items-center gap-5"
          >
            <span>Drag & Drop here (Better 16:9 ratio)</span>
            <img
              src={updatedCourse.image}
              alt="Course Image"
              className="w-full rounded-2xl shadow-md shadow-blue-700 cursor-pointer"
            />
            <div className="py-3 px-5 cursor-pointer bg-green-500 text-md hover:shadow-md rounded-3xl hover:shadow-green-500 hover:border-green-900 border-2 border-transparent transition-all duration-200">
              Update Image
            </div>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <textarea
          name="description"
          rows={7}
          value={updatedCourse.description}
          className="shadow-md shadow-blue-700 md:w-[80%] p-5 cursor-pointer hover:-translate-y-3 transition-all duration-200 border-2 border-dashed border-gray-500 focus:outline-none px-4 py-2 rounded-xl focus:bg-gray-200"
          onChange={(e) =>
            setUpdatedCourse((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
        <div className="w-full flex flex-col justify-center items-center gap-5">
        {/* Lessons */}
        <div className="flex flex-col md:w-[80%] shadow-md gap-4 rounded-2xl shadow-blue-700 p-5 lg:p-10 hover:-translate-y-3 duration-200">
            <span className="text-xl lg:text-2xl text-indigo-700 font-semibold underline">✔ Lessons</span>
            <ul className="flex flex-col gap-3">
            {updatedCourse.lessons.map((lesson, index) => (
                <li key={index} className="flex items-center gap-4">
                <input
                    type="text"
                    value={lesson}
                    onChange={(e) => {
                    const updatedLessons = [...updatedCourse.lessons];
                    updatedLessons[index] = e.target.value;
                    setUpdatedCourse((prev) => ({ ...prev, lessons: updatedLessons }));
                    }}
                    className="border px-3 py-1 rounded-md w-full"
                />
                <button
                    onClick={() => {
                    const filtered = updatedCourse.lessons.filter((_, i) => i !== index);
                    setUpdatedCourse((prev) => ({ ...prev, lessons: filtered }));
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
                </li>
            ))}
            </ul>
            <div className="flex gap-3 pt-4">
            <input
                type="text"
                value={newLesson}
                onChange={(e) => setNewLesson(e.target.value)}
                placeholder="Add new lesson"
                className="border px-3 py-1 rounded-md w-full"
            />
            <button
                onClick={() => {
                if (newLesson.trim()) {
                    setUpdatedCourse((prev) => ({
                    ...prev,
                    lessons: [...prev.lessons, newLesson.trim()]
                    }));
                    setNewLesson("");
                }
                }}
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
            >
                Add
            </button>
            </div>
        </div>

        {/* Extras */}
        <div className="flex flex-col md:w-[80%] shadow-md gap-4 rounded-2xl shadow-blue-700 p-5 lg:p-10 hover:-translate-y-3 duration-200">
            <span className="text-indigo-700 text-xl lg:text-2xl font-semibold underline">✔ Student Benefits</span>
            <ul className="flex flex-col gap-3">
            {updatedCourse.extras.map((extra, index) => (
                <li key={index} className="flex items-center gap-4">
                <input
                    type="text"
                    value={extra}
                    onChange={(e) => {
                    const updatedExtras = [...updatedCourse.extras];
                    updatedExtras[index] = e.target.value;
                    setUpdatedCourse((prev) => ({ ...prev, extras: updatedExtras }));
                    }}
                    className="border px-3 py-1 rounded-md w-full"
                />
                <button
                    onClick={() => {
                    const filtered = updatedCourse.extras.filter((_, i) => i !== index);
                    setUpdatedCourse((prev) => ({ ...prev, extras: filtered }));
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
                </li>
            ))}
            </ul>
            <div className="flex gap-3 pt-4">
            <input
                type="text"
                value={newExtra}
                onChange={(e) => setNewExtra(e.target.value)}
                placeholder="Add new benefit"
                className="border px-3 py-1 rounded-md w-full"
            />
            <button
                onClick={() => {
                if (newExtra.trim()) {
                    setUpdatedCourse((prev) => ({
                    ...prev,
                    extras: [...prev.extras, newExtra.trim()]
                    }));
                    setNewExtra("");
                }
                }}
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
            >
                Add
            </button>
            </div>
        </div>

        {/* Careers */}
        <div className="flex flex-col md:w-[80%] shadow-md gap-4 rounded-2xl shadow-blue-700 p-5 lg:p-10 hover:-translate-y-3 duration-200">
            <span className="text-indigo-700 text-xl lg:text-2xl font-semibold underline">✔ Career Opportunities Students Get</span>
            <ul className="flex flex-col gap-3">
            {updatedCourse.careers.roles.map((role, index) => (
                <li key={index} className="flex items-center gap-4">
                <input
                    type="text"
                    value={role}
                    onChange={(e) => {
                    const updatedRoles = [...updatedCourse.careers.roles];
                    updatedRoles[index] = e.target.value;
                    setUpdatedCourse((prev) => ({
                        ...prev,
                        careers: { ...prev.careers, roles: updatedRoles }
                    }));
                    }}
                    className="border px-3 py-1 rounded-md w-full"
                />
                <button
                    onClick={() => {
                    const filtered = updatedCourse.careers.roles.filter((_, i) => i !== index);
                    setUpdatedCourse((prev) => ({
                        ...prev,
                        careers: { ...prev.careers, roles: filtered }
                    }));
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
                </li>
            ))}
            </ul>
            <div className="flex gap-3 pt-4">
                <input
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="Add career role"
                    className="border px-3 py-1 rounded-md w-full"
                />
                <button
                    onClick={() => {
                    if (newRole.trim()) {
                        setUpdatedCourse((prev) => ({
                        ...prev,
                        careers: {
                            ...prev.careers,
                            roles: [...prev.careers.roles, newRole.trim()]
                        }
                        }));
                        setNewRole("");
                    }
                    }}
                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                >
                    Add
                </button>
            </div>
            <div className="flex flex-col lg:gap-2">
                <span className="font-semibold">Expected Package:</span>
                <input
                    type="text"
                    value={updatedCourse.careers.package}
                    onChange={(e) =>
                    setUpdatedCourse((prev) => ({
                        ...prev,
                        careers: { ...prev.careers, package: e.target.value }
                    }))
                    }
                    className="border px-3 py-1 rounded-md focus:outline-none focus:bg-gray-100 w-full"
                />
            </div>
        </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-3">
            <button 
            className="w-[30%] bg-indigo-500 lg:text-xl flex justify-center items-center py-3 hover:scale-105 rounded-2xl text-white font-semibold hover:shadow-lg hover:shadow-black cursor-pointer transition-all duration-200"
            onClick={handleSubmit}>
                Submit
            </button>
            <p className="font-semibold text-green-400">{message}</p>
        </div>
    </div>
  );
};

export default EditCourse;
