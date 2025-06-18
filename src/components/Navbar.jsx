import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // Optional icon lib like lucide-react
import './Navbar.css'; // Import your custom CSS for Navbar

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `text-black font-medium px-4 py-2 hover:text-purple-800 ${
      isActive ? 'underline underline-offset-4' : ''
    }`;

  return (
    <nav className="bg-transparent backdrop-blur-sm shadow-md sticky top-0 z-50">
 <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="nav">
  {/* Left: Logo */}
  <img className="logo" src="logo1.png" alt="Logo" />

  {/* Center: Navigation Links */}
  <div className="nav-center">
    <NavLink to="/" className={linkClass}>Home</NavLink>
    <NavLink to="/courses" className={linkClass}>Courses</NavLink>
    <NavLink to="/why-choose-us" className={linkClass}>Why Choose Us</NavLink>
    <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
    <NavLink to="/contact-us" className={linkClass}>Contact Us</NavLink>
  </div>

  {/* Right: Login/Signup */}
  <button className="login-btn">
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
