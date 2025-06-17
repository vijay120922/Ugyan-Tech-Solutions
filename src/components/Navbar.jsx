import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `text-white px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
    }`;

  return (
    <nav className="bg-transparent backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white text-lg font-bold">UGYAN TECH</div>

        <div className="hidden md:flex gap-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/why-choose-us" className={linkClass}>Why Choose Us</NavLink>
          <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
          <NavLink to="/contact-us" className={linkClass}>Contact Us</NavLink>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
