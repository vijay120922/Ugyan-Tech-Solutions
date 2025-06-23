import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // Optional icon lib like lucide-react
import "./Navbar.css"; // Import your custom CSS for Navbar
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const nav=useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isAtTop ? "bg-transparent" : "gradient-bg shadow-xl shadow-gray-500"
      }  w-[100%] backdrop-blur-sm fixed top-0 z-50 transition-all duration-150 rounded-b-3xl`}
    >
      <div className="flex justify-around p-4 items-center">
        <img
          className="object-contain w-[15%] cursor-pointer"
          src="/logo1.png"
          alt="Logo"
        />

        <div className="flex gap-11 w-[60%] justify-center text-[1.1em]">
          <NavLink to="/" className="nav-item" style={{ "--i": 1 }}>
            Home
          </NavLink>
          <NavLink to="/courses" className="nav-item" style={{ "--i": 2 }}>
            Courses
          </NavLink>
          <NavLink
            to="/why-choose-us"
            className="nav-item"
            style={{ "--i": 3 }}
          >
            Why Choose Us
          </NavLink>
          <NavLink to="/about-us" className="nav-item" style={{ "--i": 4 }}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className="nav-item" style={{ "--i": 5 }}>
            Contact Us
          </NavLink>
        </div>

        <button className="login-btn text-gray-700" onClick={()=>nav('/loginorSignup')}>
          Login / Sign Up
          <span className="login-arrow">
            <ArrowRight size={16} />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
