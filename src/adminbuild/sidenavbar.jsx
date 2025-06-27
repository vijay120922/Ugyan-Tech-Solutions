import {FaUser} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";;
const SideNavbar=()=>{
    const navlist=['Home','Courses','Enrolled Students Data','DashBoard'];
    return(
        <div className="absolute flex h-[100%] backdrop-blur-xl bg-sky-700 text-white rounded-r-2xl justify-between py-7 items-center flex-col">
            <div className="welcome-msg relative px-2 flex justify-between items-center w-full">
                <span className="text-xl font-semibold">Welcome Boss</span>
                <IoMdMenu size={45} className="text-white top-0 right-0 cursor-pointer p-2 hover:bg-black/20 hover:backdrop-blur-sm rounded-lg transtition-all duration-175"/>
            </div>
            
            <ul className="flex flex-col items-center w-full">
                {navlist.map((navitem,index)=>(
                    <li key={index} className="hover:bg-black/20 hover:backdrop-blur-sm hover:border-white border border-transparent rounded w-[90%] transition-all text-lg hover:scale-105 font-semibold duration-175 cursor-pointer flex justify-center p-5">
                        <button>{navitem}</button>
                    </li>
                ))}
            </ul>
            <div className="profile p-4 rounded-full hover:bg-black/20 hover:backdrop-blur-sm cursor-pointer transtition-all duration-175"><FaUser size={25}/></div>
        </div>
    )
}
export default SideNavbar;