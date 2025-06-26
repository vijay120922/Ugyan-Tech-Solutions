import React from "react";
import "../css/Courses.css";
import { useNavigate } from "react-router-dom";
import  courses  from '../data/Courses.js';




const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="courses-page mt-5">
      <h1 className="courses-title">Our Courses</h1>
      {courses.map((course, index) => (
        <div
          className={`course-block ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >
          <div className="course-image-container">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
          </div>
          <div className="course-content">
            <h2>{course.title}</h2>
            <p>{course.description1}</p>
            <button
              className="enroll-btn"
              onClick={() =>
                navigate(`/viewmore/${encodeURIComponent(course.title)}`, {
                  state: { course },
                })
              }
            >
              View details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
