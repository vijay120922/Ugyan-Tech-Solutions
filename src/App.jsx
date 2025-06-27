import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import WhyChooseUs from "./pages/WhyChooseUs";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ViewMore from "./components/ViewMore";
import LoginSignupPage from "./pages/Login-SignupPage";
import EnrollPage from "./pages/EnrollPage";
import UserProfile from "./pages/UserProfile";
import { useState,useEffect } from "react";
import AdminLandingPage from "./adminbuild/landingpage"
function App() {
  const [user, setUser] = useState(null);
  const location=useLocation();
  const navigate = useNavigat();
  const isAdmin = user?.role === "Admin";

  useEffect(() => {
    if (isAdmin && location.pathname !== "/admin") {
      navigate("/admin");
    }
  }, [isAdmin, location.pathname, navigate]);

  return (
    <>
    <ScrollToTop />
      {!isAdmin && <Navbar user={user} setUser={setUser} />}

      <Routes>
        {!isAdmin ? (
          <>
            {/* Student/User Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/viewmore/:title" element={<ViewMore user={user} />} />
            <Route path="/enroll/:title" element={<EnrollPage user={user} />} />
            <Route path="/loginorSignup" element={<LoginSignupPage setUser={setUser} />} />
            <Route path="/profile" element={<UserProfile user={user} setUser={setUser} />} />
          </>
        ) : (
          <>
            <Route path="/admin" element={<AdminLandingPage />} />
          </>
        )}
      </Routes>

      {!isAdmin && <Footer />}
    </>
  );
}

export default App;
