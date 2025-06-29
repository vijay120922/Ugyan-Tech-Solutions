import { useEffect, useState } from "react";
import CourseCard from "./components/courseCard";
import axios from "axios";
const DisplayCourse=()=>{
    const [courses,setCourses]=useState(null);
    const [error,setError]=useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/courses`)
            .then(res=>setCourses(res.data))
            .catch(err=>{
                setError('No Courses found!!');
                console.log(err);
            })
    },[]);
    if(error) return <div>Error</div>
    if(!courses) return <div>Loading...</div>
    console.log(courses);
    return(
        <>
            <div className="flex w-full justify-center items-center p-10">
                <ul className="grid lg:grid-cols-3 gap-16 md:grid-cols-2 grid-cols-1">
                    {   
                        courses.map((course,index)=>(
                            <li key={index}>
                                <CourseCard course={course}/>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        </>
    )
}
export default DisplayCourse;