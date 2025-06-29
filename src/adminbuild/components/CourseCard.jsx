import { useNavigate } from "react-router-dom";
const CourseCard=({course})=>{
    const navigate=useNavigate();
    return(
        <>
            <div className="flex flex-col border bg-transparent rounded-3xl w-[300px] hover:-translate-y-4 hover:shadow-lg hover:shadow-black transition-all duration-200" onClick={()=>navigate(`/admin/course/${course?.title}`)}>
                {/* Course Image  */}
                <div className="border-b ">
                    {course?.image?(<img src={course.image} className="rounded-t-3xl mask-cover aspect-video object-cover"></img>):(<div>No image found</div>)}
                </div>
                {/* Content displayed in card  */}
                <div className="h-full p-3 flex flex-col gap-2">
                    <span className="font-semibold text-xl line-clamp-1">{course?.title}</span>
                    <span className="text-gray-500 text-sm">{course?.subtitle}</span>
                    <div className="flex justify-between">
                        <button className="px-7 bg-green-400 py-2 rounded-2xl hover:shadow-lg  hover:border-green-900 border-2 transition-all duration-200 border-transparent">Edit</button>
                        <button className="px-7 bg-red-400 py-2 rounded-2xl hover:shadow-lg hover:border-red-950 border-2 transition-all duration-200 border-transparent">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CourseCard;