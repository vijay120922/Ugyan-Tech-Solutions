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

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/viewmore/:title" element={<ViewMore />} />
        <Route path="/loginorSignup" element={<LoginSignupPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
