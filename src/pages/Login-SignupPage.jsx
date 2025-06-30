import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { FaUserTie } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaUserTag } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import '../css/Login-SignupPage.css'
const LoginSignupPage = ({ setUser }) => {
  const baseURL=import.meta.env.VITE_BACKEND_URL;
  const navigate=useNavigate();
  const location = useLocation();
  const [passVisible,setPassVisible]=useState(false);
  const [flip,setFlip]=useState(false);
  const [passVis,setPassVis]=useState(false);
  const [confirmPassVis,setConfirmPassVis]=useState(false);
  const [loginInfo,setLoginInfo]=useState({Email:"",Password:""});
  const [loginError,setLoginError]=useState({Email:'',Password:''});
  const [signUpInfo,setSignUpInfo]=useState({
    firstName:"",
    lastName:"",
    Email:"",
    Password:"",
    confirmPass:"",
    mobileNumber: "",
  });
  const [signUpError,setSignUpError]=useState({firstName:"",lastName:"", Email:"",Password:"",confirmPass:"",mobileNumber:""});
  async function handleSignupSubmit() {
    const isValid = validateSignup();
    if (!isValid) return;

    try {
      const res = await fetch( `${baseURL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: signUpInfo.firstName,
          lastName: signUpInfo.lastName,
          email: signUpInfo.Email,
          password: signUpInfo.Password,
          mobileNumber: signUpInfo.mobileNumber,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup Successful!");
        setFlip(false);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }
  async function handleLoginSubmit() {
    const isValid = validateLogin();
    if (!isValid) return;

    try {
      const res = await fetch(`${baseURL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginInfo.Email,
          password: loginInfo.Password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token); 
        setUser(data.user); 
        console.log(data.user);
        alert("Login Successful!");
        
        // Check if we came from a course page and redirect accordingly
        const from = location.state?.from;
        if (from && from.pathname.includes('/viewmore/')) {
          navigate(from.pathname, { state: from.state });
        } else {
          navigate('/');
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }

  function validateLogin() {
    const newErrors = {};
    if (loginInfo.Email.trim() === "") {
      newErrors.Email = "No Email Address Entered";
    } else if (!loginInfo.Email.endsWith('@gmail.com')) {
      newErrors.Email = "Invalid Email (must end with @gmail.com)";
    }
    if (loginInfo.Password.trim() === "") {
      newErrors.Password = "No Password Entered";
    }

    setLoginError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function validateSignup() {
    const newErrors = {};
    if (signUpInfo.firstName.trim() === "") {
      newErrors.firstName = "First Name not entered";
    }
    if (signUpInfo.lastName.trim() === "") {
      newErrors.lastName = "Last Name not entered";
    }
    if (signUpInfo.Email.trim() === "") {
      newErrors.Email = "No Mail Address Entered!";
    } else if (!signUpInfo.Email.endsWith("@gmail.com")) {
      newErrors.Email = "Only Gmail addresses allowed";
    }
    if (!signUpInfo.Password) {
      newErrors.Password = "No Password Entered!";
    } else {
      if (signUpInfo.Password.length < 8) {
        newErrors.Password = "Password must be at least 8 characters long";
      } else if (!/[A-Z]/.test(signUpInfo.Password)) {
        newErrors.Password = "Must include at least one uppercase letter";
      } else if (!/[a-z]/.test(signUpInfo.Password)) {
        newErrors.Password = "Must include at least one lowercase letter";
      } else if (!/[0-9]/.test(signUpInfo.Password)) {
        newErrors.Password = "Must include at least one number";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(signUpInfo.Password)) {
        newErrors.Password = "Must include at least one special character";
      }
    }
    if (signUpInfo.Password && signUpInfo.confirmPass !== signUpInfo.Password) {
      newErrors.confirmPass = "Passwords do not match";
    }
    if (signUpInfo.mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile Number not entered";
    }
    setSignUpError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return (
    <>
    <div className="w-full  bg-gray-200 card-container ">
      <div className={`card-flip w-full sm:w-[90%] md:w-[60%] transition-all duration-500 mb-20 mt-25 ${flip ? 'signup h-[750px] lg:w-[50%]' : 'h-[500px] lg:w-[40%]'}`}>
          <div className=" loginform flex flex-col border gap-5 items-center justify-center rounded-xl  login-bg shadow-2xl shadow-black px-4 py-6 sm:px-8 md:px-12 lg:px-16">
            <header className="text-3xl font-bold mb-1.5 flex flex-col items-center gap-2">
              <div><FaUser size={50}/></div>
              Login Here
            </header>
            <div className="flex flex-col w-[100%]">
              <div className="flex flex-row font-semibold border shadow-lg shadow-gray-700">
                <FaUserTie size={45} className="p-3.5 border-r"/>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="p-2 w-full focus:outline-none bg-transparent text-sm sm:text-base" 
                  onChange={(e)=>setLoginInfo({...loginInfo,Email:e.target.value})}/>
              </div>
              <div className="error">{loginError.Email}</div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row border font-semibold shadow-lg shadow-gray-700">
                <CiLock size={50} className="p-3.5 border-r"/>
                <div className="flex w-full relative">
                  <input 
                    type={`${passVisible?"text":"password"}`} 
                    placeholder="Password" 
                    className="p-2 w-full focus:outline-none bg-transparent text-sm sm:text-base"
                    onChange={(e)=>setLoginInfo({...loginInfo,Password:e.target.value})}
                  />
                  <div className="absolute right-0 text-xl h-full px-3 flex justify-center items-center" onClick={()=>setPassVisible(!passVisible)}>
                    {passVisible?<FaEyeSlash color="black" className="cursor-pointer"/>:<FaEye color="black" className="cursor-pointer"/>}
                  </div>
                </div>
              </div>
              <div className="error">{loginError.Password}</div>
            </div>
            <div className="flex justify-between w-full">
              <div className="text-md flex items-center gap-1 font-semibold"><input type="checkbox" className="cursor-pointer"/>Remember Me</div>
              <div className="font-semibold text-sm text-gray-700 cursor-pointer hover:underline">Forgot Password?</div>
            </div>
            <div className="flex justify-center w-[50%]" >
                <button className="px-8 py-2 rounded-3xl text-black w-full font-bold gradientbutton-bg" onClick={handleLoginSubmit}>LOGIN</button>
            </div>
            <div className="flex gap-2 items-center w-full justify-center ">
              <span className="font-semibold text-sm">Not a Member? </span>
              <button className="hover:bg-sky-800 border-2 text-black hover:text-white hover:shadow-lg hover:shadow-black transition-all duration-300 py-2 px-8 rounded-3xl font-bold" onClick={()=>setFlip(true)}>SIGN UP</button>
            </div>
         </div>
        <div className="signupform flex flex-col gap-5 items-center justify-center rounded-xl login-bg shadow-2xl shadow-black px-2 py-4 sm:px-6 md:px-10 lg:px-16 w-full">
          <div className="text-3xl font-bold flex flex-col items-center gap-2">
            <FaUserTag size={60} color="white"/>
            <header>Sign Up</header>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full">
  {/* First Name */}
  <div className="flex flex-col w-full">
    <div className="flex flex-row border font-semibold shadow-lg shadow-gray-700  w-full">
      <input 
        type="text" 
        placeholder="First Name"
        className="p-2 w-full focus:outline-none bg-transparent text-sm sm:text-base rounded-2xl"
        onChange={(e)=>setSignUpInfo({...signUpInfo, firstName: e.target.value})}
      />
    </div>
    <div className="error">{signUpError.firstName}</div>
  </div>

  {/* Last Name */}
  <div className="flex flex-col w-full">
    <div className="flex flex-row border font-semibold shadow-lg shadow-gray-700 w-full">
      <input 
        type="text" 
        placeholder="Last Name"
        className="p-2 w-full focus:outline-none bg-transparent text-sm sm:text-base rounded-2xl"
        onChange={(e)=>setSignUpInfo({...signUpInfo, lastName: e.target.value})}
      />
    </div>
    <div className="error">{signUpError.lastName}</div>
  </div>
</div>

{/* Email */}
<div className="flex flex-col w-full mt-2">
  <div className="flex flex-row border font-semibold shadow-lg shadow-gray-700  w-full">
    <input 
      type="email" 
      placeholder="Email"
      className="p-2 w-full focus:outline-none bg-transparent text-sm sm:text-base rounded-2xl"
      onChange={(e)=>setSignUpInfo({...signUpInfo, Email: e.target.value})}
    />
  </div>
  <div className="error">{signUpError.Email}</div>
</div>

{/* Mobile Number */}
<div className="flex flex-col w-full">
  <div className="flex flex-row border font-semibold shadow-lg shadow-gray-700  w-full">
    <input 
      type="tel"
      placeholder="Mobile Number"
      className="p-2 w-full focus:outline-none bg-transparent text-sm sm:text-base rounded-2xl"
      onChange={(e)=>setSignUpInfo({...signUpInfo, mobileNumber: e.target.value})}
    />
  </div>
</div>

{/* Password */}
<div className="flex flex-col w-full mt-2">
  <div className="flex flex-row border font-semibold shadow-lg shadow-gray-700  w-full relative">
    <input 
      type={passVis ? "text" : "password"}
      placeholder="Set Password"
      className="p-2 w-full focus:outline-none bg-transparent text-sm sm:text-base rounded-2xl"
      onChange={(e)=>setSignUpInfo({...signUpInfo, Password: e.target.value})}
    />
    <div className="absolute right-3 top-3.5 cursor-pointer" onClick={() => setPassVis(!passVis)}>
      {passVis ? <FaEyeSlash /> : <FaEye />}
    </div>
  </div>
  <div className="error">{signUpError.Password}</div>
</div>

{/* Confirm Password */}
<div className="flex flex-col w-full">
  <div className="flex flex-row border font-semibold shadow-lg shadow-gray-700  w-full relative">
    <input 
      type={confirmPassVis ? "text" : "password"}
      placeholder="Confirm Password"
      className="p-2 w-full focus:outline-none bg-transparent text-sm sm:text-base rounded-2xl"
      onChange={(e)=>setSignUpInfo({...signUpInfo, confirmPass: e.target.value})}
    />
    <div className="absolute right-3 top-3.5 cursor-pointer" onClick={() => setConfirmPassVis(!confirmPassVis)}>
      {confirmPassVis ? <FaEyeSlash /> : <FaEye />}
    </div>
  </div>
  <div className="error">{signUpError.confirmPass}</div>
</div>

          <button className="gradientbutton-bg px-8 py-2 rounded-3xl text-black font-bold w-full sm:w-auto" onClick={handleSignupSubmit}>Create Account</button>
          <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-2 mt-2">
            <span className="font-semibold text-sm">Already a member?</span>
            <button className="hover:bg-sky-800 border-2 hover:shadow-lg hover:shadow-black transition-all duration-300 py-2 px-8 rounded-3xl font-bold text-black hover:text-white ml-0 sm:ml-2 w-full sm:w-auto" onClick={()=>setFlip(false)}>Log In</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default LoginSignupPage;
