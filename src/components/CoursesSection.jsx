import React from "react";
import { useNavigate } from "react-router-dom";
import "./CoursesSection.css";
import { ArrowRight } from "lucide-react";
const courses = [
  {
    title: "Full Stack Web Development",
    description: "Learn to build dynamic websites using MERN stack.",
    image: "/course1.jpg",
  },
  {
    title: "Data Science & Analytics",
    description: "Analyze data to uncover insights and trends.",
    image: "/course2.jpg",
  },
  {
    title: "Frontend        Development using react",
    description: "Master HTML, CSS, JavaScript and React.",
    image: "/course3.jpg",
  },
  {
    title: "Python for         Beginners with ugyan",
    description: "Start your programming journey with Python.",
    image: "/course4.jpg",
  },
];

const CoursesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="courses-section flex flex-col">
      <h2 className="section-title">Courses</h2>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <button
  className="enroll-button"
  onClick={() =>
    navigate(`/viewmore/${encodeURIComponent(course.title)}`, {
      state: { course },
    })
  }
>
  View More
</button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button
          className="see-all-button flex items-center gap-3"
          onClick={() => navigate("/courses")}
        >
          See All Courses
          <span className="arrow">
            <ArrowRight size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CoursesSection;
