import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { FaClockRotateLeft } from "react-icons/fa6";

const ViewCourse=()=>{
    const {title}=useParams();
    const [course,setCourse]=useState(null);
    const [error,setError]=useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/courses/${title}`)
            .then(res=>setCourse(res.data))
            .catch((err)=>{
                console.log(err);    
                setError('Course Not Found!');
            });
    },[title]);
    if(error) return <div>{error}</div>
    if (!course) return <div className="p-6">Loading...</div>;
    const {subtitle,description,image,lessons=[],duration,extras=[],careers={roles:[],package:""}}=course;
    return(
        <> 
            <div className="flex flex-col w-[100%] justify-center items-start p-10 pt-20 lg:p-20 gap-10 lg:gap-16">
            {/* Header  */}
            <div className="flex flex-col gap-3">
                <span className="text-xl lg:text-4xl font-bold underline text-violet-900">{title}</span>
                <span className="text-sm lg:text-md">{subtitle}</span>
            </div>
            {/* Pic and description  */}
            <div className="flex gap-5 lg:gap-10 lg:text-lg flex-col md:justify-center md:items-center lg:flex-row">
                <img src={image} alt="Course Image" className="lg:w-[40%] w-full md:w-[80%] rounded-2xl shadow-md shadow-blue-700 cursor-pointer"/>
                <div className="flex justify-center items-center shadow-md shadow-blue-700 md:w-[80%] p-5 rounded-2xl cursor-pointer hover:-translate-y-3 transition-all duration-200">
                    {description}
                </div>
            </div>
            {/* remaining data */}
            <div className="flex gap-20 lg:text-lg flex-col lg:flex-row md:items-center md:justify-center w-full">
                {/* lessons  and duration*/}
                <div className="flex flex-col md:w-[80%] shadow-md gap-4 rounded-2xl shadow-blue-700 p-5 lg:p-10 hover:-translate-y-3 duration-200">
                    {/* lessons  */}
                    <span className="text-xl lg:text-2xl text-indigo-700 font-semibold underline">&#x2713;Lessons</span>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        {lessons.map((lesson,index)=>(
                            <li key={index}>{lesson}</li>
                        ))}
                    </ul>
                    {/* duration  */}
                    <div className="pt-5 flex gap-3">
                        <span><FaClockRotateLeft className="text-3xl lg:text-6xl text-indigo-800"/></span>
                        <div className="font-semibold flex justify-center items-center gap-3">
                            <span className="text-indigo-600 text-lg">Duration: </span>
                            <span className="underline underline-offset-4">{duration}</span>
                        </div>
                    </div>
                </div>
                {/* roles,extras,package  */}
                <div className="flex flex-col md:w-[80%] shadow-md gap-4 rounded-2xl shadow-blue-700 p-5 lg:p-10 hover:-translate-y-3 duration-200">
                    {/* extras  */}
                    <div className="flex flex-col gap-5">
                        <span className="text-indigo-700 text-xl lg:text-2xl font-semibold underline">&#x2713;Student Benefits</span>
                        <ul className="flex flex-col gap-3 list-disc pl-5">
                            {extras.map((extra,index)=>(
                                <li key={index}>{extra}</li>
                            ))}
                        </ul>
                    </div>  
                    <div className="flex flex-col gap-5">
                        {/* roles  */}
                        <span className="text-indigo-700 text-xl lg:text-2xl font-semibold underline">&#x2713;Career Oppurtunities Student gets</span>
                        <ul className="flex flex-col gap-3 list-disc pl-5">
                            {careers.roles.map((role,index)=>(
                                <li key={index}>{role}</li>                                    
                            ))}
                        </ul>
                        {/* package  */}
                        <div className="flex flex-col lg:gap-2">
                            <span className="font-semibold">Expected Package: </span><span>{careers.package}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}
export default ViewCourse;