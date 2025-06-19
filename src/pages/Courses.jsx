import React from "react";
import "./Courses.css";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Full Stack Web Development",
    description:
      "Master Full Stack Web Development using the powerful MERN stack – MongoDB, Express.js, React, and Node.js. This course is designed to help you build dynamic, data-driven web applications from scratch. You'll start by understanding the basics of frontend development using React, move on to creating robust backend APIs with Node.js and Express, and learn how to store and retrieve data using MongoDB. By the end of this course, you'll be able to build and deploy fully functional full-stack applications, such as e-commerce platforms, blogs, and admin dashboards, using just one programming language – JavaScript.",
    image: "/course1.jpg",
  },
  {
    title: "Data Science & Analytics",
    description:
     "In this course, you'll learn how to collect, clean, analyze, and visualize data using Python, Pandas, NumPy, and Matplotlib. You'll also explore real-world datasets and gain hands-on experience in data manipulation, exploratory data analysis (EDA), and basic statistical techniques. Whether you're preparing for a data analyst role or just starting your data journey, this course builds a solid foundation in data science tools and thinking",
    image: "/course2.jpg",
  },
  {
    title: "Frontend Development",
    description: "This course covers everything you need to become a frontend developer: HTML5, CSS3, JavaScript, and modern frameworks like React.js. You'll learn to build interactive, mobile-friendly web pages, manage component state, and connect your UI to APIs. By the end of this course, you'll be able to create professional-grade websites and web apps that work seamlessly across devices and browsers.",
    image: "/course3.jpg",
  },
  {
    title: "Python for Beginners",
    description: "This course introduces you to programming fundamentals such as variables, data types, loops, functions, and error handling — all in Python. You'll also get hands-on with small projects like a calculator, to-do app, and number games. Whether you're aiming for web development, data science, or automation, Python is the perfect first step — and this course will guide you from zero to confident coder",
    image: "/course4.jpg",
  },
];

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
            <p>{course.description}</p>
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
