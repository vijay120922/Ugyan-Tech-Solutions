import axios from "axios";
import { useState,useEffect } from "react";

const StudentsData=()=>{
    const [students,setStudents]=useState(null);
    const [error,setError]=useState(null);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/enrollment/enrolledstudents')
            .then(res=>setStudents(res.data))
            .catch(err=>{
                console.log(err);
                setError('Some issue in the server.')
            })
    },[])
    if(error) return <div>Error</div>
    if(!students) return <div>Loading...</div>
    console.log(students);
    return(
        <>
            <div className="flex flex-col lg:p-20 p-5 gap-10 justify-center items-center">
               <h2 className="text-3xl text-indigo-800 font-semibold">
                    All Enrolled Students
               </h2>
               <div>
                    <table>
                        <thead className="bg-indigo-800 text-white whitespace-nowrap">
                            <tr className="font-semibold border-b">
                                <td className="px-6 py-4">S.No</td>
                                <td className="px-6 py-4">Fist Name</td>
                                <td className="px-6 py-4">Last Name</td>
                                <td className="px-6 py-4">Email</td>
                                <td className="px-6 py-4">Mobile Number</td>
                                <td className="px-6 py-4">Course</td>
                                <td className="px-6 py-4">Enrollment Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((st,index)=>(
                                <tr key={st._id} className="border-b">
                                    <td className="px-6 py-3">{index+1}</td>
                                    <td className="px-6 py-3">{st.student.firstName}</td>
                                    <td className="px-6 py-3">{st.student.lastName}</td>
                                    <td className="px-6 py-3">{st.student.email}</td>
                                    <td className="px-6 py-3 font-semibold">{st.student.mobileNumber}</td>
                                    <td className="px-6 py-3">{st.course.title}</td>
                                    <td className=" py-3">{new Date(st.enrollmentDate).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
               </div>
            </div>

        </>
    )
}
export default StudentsData;