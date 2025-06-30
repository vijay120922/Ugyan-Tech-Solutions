import { useState,useMemo } from "react";
import axios from "axios";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./ViewMore.css";

const ViewMore = ({ user }) => {
  const baseURL=import.meta.env.VITE_BACKEND_URL;
  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  const studentId = user?._id;
  const [message, setMessage] = useState("");
  const [enrollMsg,setEnrollMsg]=useState(null)
  const handleEnroll = async () => {
    setEnrollMsg("Enrolling...");
    try {
      const courseRes = await axios.get(`${baseURL}/courses/${title}`);
      const courseId = courseRes.data._id;

      const res = await axios.post(`${baseURL}/enrollment/enroll`, {
        studentId,
        courseId,
      });
      setMessage(res.data.message);
      
    } catch (err) {
      setMessage(err.response?.data?.message || "Error enrolling");
    }
    setEnrollMsg(null);
  };


  const allReviews = [
    { stars: "⭐⭐⭐⭐⭐", text: "This course changed my life! The MERN stack was explained so clearly.", name: "— Aisha" },
    { stars: "⭐⭐⭐⭐", text: "Clear explanations and practical projects. Highly recommend!", name: "— Raghav" },
    { stars: "⭐⭐⭐⭐⭐", text: "Perfect for beginners. Loved the hands-on approach.", name: "— Meenal" },
    { stars: "⭐⭐⭐⭐⭐", text: "Great instructor and excellent examples throughout.", name: "— Kunal" },
    { stars: "⭐⭐⭐⭐", text: "Well-paced and beginner friendly!", name: "— Sana" },
    { stars: "⭐⭐⭐⭐⭐", text: "The assignments really helped me grasp the topics.", name: "— Farhaan" },
    { stars: "⭐⭐⭐⭐", text: "Good course, but I wish there were subtitles.", name: "— Priya" },
    { stars: "⭐⭐⭐⭐⭐", text: "Best online course I've ever taken.", name: "— Arjun" },
    { stars: "⭐⭐⭐⭐", text: "Loved the real-world project section.", name: "— Kavya" },
    { stars: "⭐⭐⭐⭐⭐", text: "It helped me get my first internship.", name: "— Nikhil" },
    { stars: "⭐⭐⭐⭐", text: "Very detailed and beginner friendly.", name: "— Tanya" },
    { stars: "⭐⭐⭐⭐⭐", text: "The pace and structure were perfect.", name: "— Ishaan" },
    { stars: "⭐⭐⭐⭐", text: "I enjoyed the challenges and tasks.", name: "— Sneha" },
    { stars: "⭐⭐⭐⭐⭐", text: "Totally worth it for the price.", name: "— Aditya" },
    { stars: "⭐⭐⭐⭐", text: "Decent course, gives more clarity.", name: "— Neha" },
    { stars: "⭐⭐⭐⭐⭐", text: "Clear voice and structured lessons.", name: "— Rehan" },
    { stars: "⭐⭐⭐⭐", text: "Loved the coding exercises!", name: "— Manya" },
    { stars: "⭐⭐⭐⭐⭐", text: "Instructor is very engaging!", name: "— Aman" },
    { stars: "⭐⭐⭐⭐", text: "Some modules were a bit fast but understandable ", name: "— Ritu" },
    { stars: "⭐⭐⭐⭐⭐", text: "Simple, effective, and practical.", name: "— Varun" },
  ];

  const randomReviews = useMemo(() => {
    const shuffled = [...allReviews].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  return (
    <>
      <div className="view-more-container">
        <h1 className="course-title-animated">{course.title}</h1>

        {/* Image + Description Row */}
        <div className="course-info-row">
          <img src={course.image} alt={course.title} />
          <p className="description-text">{course.description1}</p>
        </div>

        {/* Enroll + Students Count */}
        <div className="flex flex-col w-full justify-center items-center ">
          <button className="enroll-btn" onClick={handleEnroll}>
            {user ? (enrollMsg||"Enroll Now") : "Login to Enroll"}
          </button>
          {message&&(
            <>
              <p className="font-bold text-xl text-indigo-600 ">{message}.</p>
              <p className="font-semibold text-md text-indigo-600 ">We will communicate you soon.</p>
            </>
          )}
        </div>

        {/* Lessons & Extras */}
        <div className="details-row">
          <div className="lessons-column">
            <h3>What You'll Learn</h3>
            <ul>
              {course.lessons?.map((lesson, idx) => (
                <li key={idx}>✔️ {lesson}</li>
              ))}
            </ul>
            {course.duration && (
              <p className="duration">Duration:{course.duration}</p>
            )}
          </div>

          <div className="extras-column">
            <h3>What You Get</h3>
            <ul>
              {course.extras?.map((item, idx) => (
                <li key={idx}>✔️ {item}</li>
              ))}
            </ul>
           {course.careers && (
              <div className="career-box">
                <h3>Career Opportunities After Completing This Course</h3>
                <ul>
                  {course.careers.roles.map((role, idx) => (
                    <li key={idx}> ✔️{role}</li>
                  ))}
                  <li>✔️ Expected Package: {course.careers.package}</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <button className="go-back-btn" onClick={() => navigate("/courses")}>
          ← Go Back to Courses
        </button>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2 className="reviews-title">What Our Previous Students Said</h2>
        <div className="reviews-container">
          {randomReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="stars">{review.stars}</div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer-name">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewMore;
