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
    <>
      <div className="view-more-container">
        <h1 className="course-title-animated">{course.title}</h1>

        {/* Image + Description Row */}
        <div className="course-info-row">
          <img src={course.image} alt={course.title} />
          <p className="description-text">{course.description}</p>
        </div>

        {/* Enroll + Students Count */}
        <div className="action-row">
          <button className="enroll-btn">Enroll Now</button>
          <p className="student-count">📚 3,200 students enrolled</p>
        </div>

        {/* Lessons & What You Get Section */}
        <div className="details-row">
          <div className="lessons-column">
            <h3>What You'll Learn</h3>
            <ul>
              <li>Lesson 1: Introduction</li>
              <li>Lesson 2: Project Setup</li>
              <li>Lesson 3: Hands-on Practice</li>
            </ul>
          </div>

          <div className="extras-column">
            <h3>What You Get</h3>
            <ul>
              <li> Lifetime Access</li>
              <li>Certificate of Completion</li>
              <li>Downloadable Resources</li>
            </ul>
          </div>
        </div>

        <button className="go-back-btn" onClick={() => navigate("/courses")}>
          ← Go Back to Courses
        </button>
      </div>

      {/* ✅ Reviews Section */}
      <div className="reviews-section">
        <h2 className="reviews-title">What Our Previous Students Said</h2>

        <div className="reviews-container">
          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              "This course changed my life! The MERN stack was explained so clearly."
            </p>
            <div className="reviewer-name">— Aditi R.</div>
          </div>

          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐</div>
            <p className="review-text">
              "Clear explanations and practical projects. Highly recommend!"
            </p>
            <div className="reviewer-name">— Raj V.</div>
          </div>

          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              "Perfect for beginners. Loved the hands-on approach."
            </p>
            <div className="reviewer-name">— Meena S.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMore;
