import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, User, LogOut } from "lucide-react";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = ({ user, setUser }) => {
  const location = useLocation();
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setShowUserMenu(false);
    nav("/");
  };

  return (
    <nav
      className={`${
        isAtTop && location.pathname === "/" ? "bg-transparent" : "gradient-bg shadow-xl shadow-gray-500"
      } w-full fixed top-0 z-50 transition-all duration-150 rounded-b-3xl p-5 lg:p-0`}
    >
      
      <div className="flex justify-between items-center w-full mx-auto">
        <img
          className="object-contain w-[130px] cursor-pointer"
          src="/logo1.png"
          alt="Logo"
          onClick={() => nav("/")}
        />

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          className={`nav-links lg:flex gap-2 w-full items-center md:justify-start lg:justify-between text-[1em] ${
            menuOpen ? "flex flex-col absolute top-[70px] left-0 w-full bg-white p-6 rounded-b-xl z-40" : "hidden"
          } lg:static lg:flex-row lg:bg-transparent`}
        >
          <NavLink to="/" className="nav-item" style={{ "--i": 1 }} onClick={()=>setMenuOpen(false)} >
            Home
          </NavLink>
          <NavLink to="/courses" className="nav-item" style={{ "--i": 2 }} onClick={()=>setMenuOpen(false)}>
            Courses
          </NavLink>
          <NavLink to="/why-choose-us" className="nav-item" style={{ "--i": 3 }} onClick={()=>setMenuOpen(false)}>
            Why Choose Us
          </NavLink>
          <NavLink to="/about-us" className="nav-item" style={{ "--i": 4 }} onClick={()=>setMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className="nav-item" style={{ "--i": 5 }} onClick={()=>setMenuOpen(false)}>
            Contact Us
          </NavLink>

          {user ? (
            <div className="relative mt-4 lg:mt-0">
              <button 
                className="user-menu-btn flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User size={20} />
                <span className="hidden sm:inline">Hi, {user.firstName}!</span>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-gray-700"
                    onClick={() => {
                      nav("/profile");
                      setShowUserMenu(false);
                      setMenuOpen(false);
                    }}
                  >
                    <User size={16} />
                    My Profile
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-600"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="login-btn mt-4 md:mt-0" onClick={() => {nav('/loginorSignup');setMenuOpen(false)}} >
              Login / Sign Up
              <span className="login-arrow">
                <ArrowRight size={16} />
              </span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
