import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = ({ user }) => {
  const location = useLocation();
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate();

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
        isAtTop && location.pathname === "/" ? "bg-transparent" : "gradient-bg shadow-xl shadow-gray-500"
      } w-full fixed top-0 z-50 transition-all duration-150 rounded-b-3xl`}
    >
      <div className="flex justify-between items-center p-4 max-w-[1200px] mx-auto">
        <img
          className="object-contain w-[130px] cursor-pointer"
          src="/logo1.png"
          alt="Logo"
          onClick={() => nav("/")}
        />

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Main nav menu */}
        <div
          className={`nav-links md:flex gap-10 items-center text-[1em] ${
            menuOpen ? "flex flex-col absolute top-[70px] left-0 w-full bg-white p-6 shadow-md rounded-b-xl z-40" : "hidden"
          } md:static md:flex-row md:bg-transparent`}
        >
          <NavLink to="/" className="nav-item" style={{ "--i": 1 }}>
            Home
          </NavLink>
          <NavLink to="/courses" className="nav-item" style={{ "--i": 2 }}>
            Courses
          </NavLink>
          <NavLink to="/why-choose-us" className="nav-item" style={{ "--i": 3 }}>
            Why Choose Us
          </NavLink>
          <NavLink to="/about-us" className="nav-item" style={{ "--i": 4 }}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className="nav-item" style={{ "--i": 5 }}>
            Contact Us
          </NavLink>

          <button className="login-btn mt-4 md:mt-0" onClick={() => nav('/loginorSignup')}>
            Login / Sign Up
            <span className="login-arrow">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
