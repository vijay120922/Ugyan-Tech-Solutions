import {NavLink} from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { SiCoursera } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { MdDataUsage,MdOutlineAdminPanelSettings,MdOutlineDriveFolderUpload  } from "react-icons/md";


const SideNavbar = () => {
  const navlist = [
    {
        "item":"Dashboard",
        "route":'/admin/',
        "icon":<IoHomeOutline/>
    },
    { 
        "item":"Courses",
        "route":'/admin/courses',
        "icon":<SiCoursera/>
    }, 
    {
      "item":"Upload Course",
      "route":"/admin/uploadCourse",
      "icon":<MdOutlineDriveFolderUpload/>

    },
    {
        "item":"AdminPanel",
        "route":'/admin/panel',
        "icon":<MdOutlineAdminPanelSettings/>
    },
    {
        "item":"Enrolled Students",
        "route":'/admin/enrolledstudents',
        "icon":<MdDataUsage/>
    },
    
    {
      "item":"Profile",
      "route":"/admin/profile",
      "icon": <FaUser/>

    }
  ];

  return (
    <>
      <div className="flex shadow-xl w-[20%]">
          <div className="flex flex-col w-full items-start p-4">
            <div className="text-xl font-semibold my-3">EduTech Admin</div>
            <div className="flex flex-col w-full mt-5 gap-0 text-gray-600">
              {navlist.map((item,index)=>(
                <NavLink 
                  to={item.route} 
                  key={index} 
                  className={({ isActive }) => 
                    isActive ? "flex items-center gap-3 p-2 my-1 bg-blue-100 text-blue-500 rounded-md w-full" : "flex items-center gap-3 p-2 my-1 hover:bg-gray-200 rounded-md w-full"
                  }
                >
                  <span className="text-lg font-semibold">{item.icon}</span>
                  <span className="font-semibold text-sm">{item.item}</span>
                </NavLink>
              ))}
            </div>
          </div>
      </div>
    </>
  )
};

export default SideNavbar;
