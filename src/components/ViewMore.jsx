import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./ViewMore.css";

const ViewMore = () => {
  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const course = location.state?.course;

  if (!course) {
    return (
      <div className="not-found">
        <h2>Course not found!</h2>
        <button onClick={() => navigate("/courses")}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="view-more-container">
      <img src={course.image} alt={course.title} />
      
      <h1 className="course-title-animated">{course.title}</h1>
      
      <div className="course-description-box">
        <p>{course.description}</p>
      </div>

      <div className="pricing">
        <span className="original-price">₹4999</span>
        <span className="discounted-price">₹999</span>
      </div>

      <button className="enroll-btn">Enroll Now</button>

      {/* ✅ Go Back Button */}
      <button className="go-back-btn" onClick={() => navigate("/courses")}>
        ← Go Back to Courses
      </button>
    </div>
  );
};

export default ViewMore;
