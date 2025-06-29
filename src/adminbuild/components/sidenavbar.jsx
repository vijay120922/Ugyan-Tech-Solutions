import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {NavLink} from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { SiCoursera } from "react-icons/si";
import { MdDataUsage,MdDashboardCustomize,MdOutlineAdminPanelSettings,MdOutlineDriveFolderUpload  } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

const SideNavbar = () => {
  const navlist = [
    {
        "item":"Home",
        "route":'/admin/home',
        "icon":<IoHomeOutline/>
    },
    { 
        "item":"Courses",
        "route":'/admin/courses',
        "icon":<SiCoursera/>
    }, 
    {
        "item":"Enrolled Students Data",
        "route":'/admin/enrolledstudentsdata',
        "icon":<MdDataUsage/>
    },
    {
        "item":"DashBoard",
        "route":'/admin/dashboard',
        "icon":<MdDashboardCustomize/>
    },
    {
        "item":"AdminPanel",
        "route":'/admin/panel',
        "icon":<MdOutlineAdminPanelSettings/>
    },
    {
      "item":"Upload New Course",
      "route":"/admin/uploadCourse",
      "icon":<MdOutlineDriveFolderUpload/>

    }
  ];
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="flex">
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex fixed h-full w-[260px] backdrop-blur-xl bg-sky-700 text-white rounded-r-2xl gap-7 py-7 items-center flex-col shadow-2xl shadow-black z-20"
          >
            <div className="welcome-msg relative px-2 flex justify-between items-center w-full">
              <span className="text-2xl font-semibold pl-5">Welcome Boss</span>
              <IoMdMenu
                size={45}
                className="text-white top-0 right-0 cursor-pointer p-2 hover:bg-black/20 hover:backdrop-blur-sm rounded-lg transition-all duration-175"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            <ul className="flex flex-col items-center w-full">
              {navlist.map((navitem, index) => (
                <NavLink
                key={index}
                to={navitem.route}
                onClick={()=>setMenuOpen(false)}
                className={({ isActive }) =>
                    `w-full p-2 flex items-center gap-2 text-lg font-semibold rounded transition-all 
                    ${isActive ? "bg-black/30 border-white" : "hover:bg-black/20 border-transparent"} 
                    border hover:backdrop-blur-sm`
                }
                >
                <div>{navitem.icon}</div>
                <span>{navitem.item}</span>
                </NavLink>

              ))}
            </ul>

            <div className="profile p-4 rounded-full hover:bg-black/20 hover:backdrop-blur-sm cursor-pointer transition-all duration-175">
              <RiAdminLine size={35} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!menuOpen && (
        <IoMdMenu
          size={45}
          className="text-black hover:text-white absolute top-4 left-4 cursor-pointer mt-3 p-2 hover:bg-sky-600 hover:backdrop-blur-sm rounded-lg transition-all duration-175 z-10"
          onClick={() => setMenuOpen(true)}
        />
      )}
    </div>
  );
};

export default SideNavbar;
