import { Route,Routes,Navigate } from "react-router-dom";

import SideNavbar from "./components/sidenavbar";

import HomePage from "./homepage";
import DisplayCourse from "./DisplayCourse";
import ViewCourse from "./ViewCourse";

import UploadCourseForm from "./UploadCourse";
import EditCourse from "./EditCourse";
import StudentsData from "./StudentsData";
const AdminLandingPage=({user,courses})=>{
    return(
        <div className="min-w-screen min-h-screen flex" style={{fontFamily:"Poppins"}}>
            <SideNavbar/>
            <Routes>
                <Route path="/home" element={<HomePage user={user}/>}/>
                <Route path="/courses" element={<DisplayCourse/>}/>
                <Route path="/course/:title" element={<ViewCourse/>}/>
                <Route path="/course_edit/:title" element={<EditCourse/>}/>
                <Route path="/enrolledstudentsdata" element={<StudentsData/>}/>
                <Route path="/uploadCourse" element={<UploadCourseForm/>}/>
            </Routes>
        </div>
    )
}
export default AdminLandingPage;