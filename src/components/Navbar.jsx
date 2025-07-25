import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, LogOut } from "lucide-react";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = ({ user, setUser }) => {
  const location = useLocation();
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate();
  console.log(user);
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
    setUser && setUser(null);
    nav("/");
  };

  return (
    <nav
      className={`${
        isAtTop && location.pathname === "/" ? "bg-transparent" : "gradient-bg shadow-xl shadow-gray-500"
      } w-full fixed top-0 z-50 transition-all duration-150 rounded-b-3xl p-4 lg:px-8 lg:p-3`}
    >
      <div className="flex justify-between items-center">

        <h4
          className="object-contain w-[130px] cursor-pointer whitespace-nowrap"
          style={{ fontFamily: "Poppins", fontWeight: "600" }}
          onClick={() => nav("/profile")}>Ugyan Edu tech</h4>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          className={`nav-links  gap-2 items-center md:justify-start lg:flex lg:py-2 lg:justify-center lg:gap-14 text-[1em] ${
            menuOpen ? "flex flex-col absolute top-[70px] left-0 w-full bg-white p-6 rounded-b-xl z-40" : "hidden"
          } lg:static lg:flex-row lg:bg-transparent`}
        >
          <NavLink to="/" className="nav-item hover:scale-105 hover:text-[#6b21a8]" style={{ "--i": 1 }} onClick={()=>setMenuOpen(false)} >
            Home
          </NavLink>
          <NavLink to="/courses" className="nav-item hover:scale-105 hover:text-[#6b21a8]" style={{ "--i": 2 }} onClick={()=>setMenuOpen(false)}>
            Courses
          </NavLink>
          <NavLink to="/why-choose-us" className="nav-item hover:scale-105 hover:text-[#6b21a8]" style={{ "--i": 3 }} onClick={()=>setMenuOpen(false)}>
            Why Choose Us
          </NavLink>
          <NavLink to="/about-us" className="nav-item hover:scale-105 hover:text-[#6b21a8]" style={{ "--i": 4 }} onClick={()=>setMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className="nav-item hover:scale-105 hover:text-[#6b21a8]" style={{ "--i": 5 }} onClick={()=>setMenuOpen(false)}>
            Contact Us
          </NavLink>
          <div className="lg:hidden">
            {user?
              (
                <span className="font-semibold">
                  Welcome {user.firstName}
                </span>
              ):
              (<button
                className="login-btn mt-4 md:mt-0 nav-item"
                style={{ "--i": 6 }}
                onClick={() => {
                  nav("/loginorSignup");
                  setMenuOpen(false);
                }}
              >
                Login / Sign Up
                <span className="login-arrow">
                  <ArrowRight size={16} />
                </span>
              </button>)
            }
            </div> 
            </div>

        <div className="hidden lg:flex">
          {user?
              (
                <span className="font-semibold whitespace-nowrap text-xl hover:border-[#6b21a8] border border-transparent rounded-3xl p-2 px-3 hover:text-[#6b21a8] cursor-pointer transition-all"
                  onClick={()=>nav('/profile')}>
                  Welcome {user.firstName}
                </span>
              ):
              (<button
                className="login-btn mt-4 md:mt-0 nav-item"
                onClick={() => {
                  nav("/loginorSignup");
                  setMenuOpen(false);
                }}
              >
                Login / Sign Up
                <span className="login-arrow">
                  <ArrowRight size={16} />
                </span>
              </button>)
            }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
