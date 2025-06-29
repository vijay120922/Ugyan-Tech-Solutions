import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import WhyChooseUs from "./pages/WhyChooseUs";
import ViewMore from "./components/ViewMore";
import LoginSignupPage from "./pages/Login-SignupPage";
import EnrollPage from "./pages/EnrollPage";
import ProfilePage from "./pages/ProfilePage";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";

// Admin Pages
import AdminLandingPage from "./adminbuild/landingpage";
import UploadCourseForm from "./adminbuild/UploadCourse";

// Layout
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Protected Route Component
const ProtectedRoute = ({ user, allowedRoles, children }) => {
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

function App() {
  const [user, setUser] = useState(null);
  const [isRestoring, setIsRestoring] = useState(true);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      } finally {
        setIsRestoring(false); // set after both tasks
      }
    };

    fetchCourses();
  }, []);


  const isAdmin = user?.role === "Admin";

  if (isRestoring) return null; 

  return (
    <>
      <ScrollToTop />

      {!isAdmin && <Navbar user={user} setUser={setUser} />}

      <Routes>
        {/* 🔐 User Routes */}
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route path="/courses" element={<Courses />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/why-choose-us" element={<WhyChooseUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/viewmore/:title" element={<ViewMore user={user}/>}/>
        <Route path="/enroll/:title" element={<EnrollPage user={user} />}/>
        <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />}/>

        {/* 🔐 Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute user={user} allowedRoles={["Admin"]}>
              <AdminLandingPage user={user} courses={courses}/>
            </ProtectedRoute>
          }
        />
        {/* 🔓 Public Routes */}
        <Route
          path="/login"
          element={<LoginPage user={user} setUser={setUser} />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/loginorSignup" element={<LoginSignupPage />} />

        {/* 🔁 Wildcard fallback */}
        <Route
          path="*"
          element={
            user ? (
              <Navigate to={user.role === "Admin" ? "/admin" : "/"} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      {!isAdmin && <Footer />}
    </>
  );
}

export default App;
