import React from "react";
import "./Courses.css";

const courses = [
  {
    title: "Full Stack Web Development",
    description:
      "Build complete applications using the MERN stack from scratch.",
    image: "/course1.jpg",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Explore data with Python, Pandas, and powerful visualization tools.",
    image: "/course2.jpg",
  },
  {
    title: "Frontend Development",
    description: "Design responsive interfaces using HTML, CSS, JS & React.",
    image: "/course3.jpg",
  },
  {
    title: "Python for Beginners",
    description: "Start coding with the easiest and most powerful language.",
    image: "/course4.jpg",
  },
];

const Courses = () => {
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
            <p>{course.description}</p>
            <button className="enroll-btn">View details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
