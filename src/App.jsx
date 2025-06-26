import { Routes, Route } from "react-router-dom";
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
import ProfilePage from "./pages/ProfilePage";
import { useState,useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          console.error("Failed to fetch user:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/viewmore/:title" element={<ViewMore user={user} />} />
        <Route path="/enroll/:title" element={<EnrollPage user={user} />} />
        <Route path="/loginorSignup" element={<LoginSignupPage setUser={setUser}/>}/>
        <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
