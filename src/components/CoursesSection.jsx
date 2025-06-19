import React from "react";
import { useNavigate } from "react-router-dom";
import "./CoursesSection.css";
import { ArrowRight } from "lucide-react";
const courses = [
  {
    title: "Full Stack Web Development",
    description: "Learn to build dynamic websites using MERN stack.",
    description1:
    "Master Full Stack Web Development using the powerful MERN stack – MongoDB, Express.js, React, and Node.js. This course is designed to help you build dynamic, data-driven web applications from scratch. You'll start by understanding the basics of frontend development using React, move on to creating robust backend APIs with Node.js and Express, and learn how to store and retrieve data using MongoDB. By the end of this course, you'll be able to build and deploy fully functional full-stack applications, such as e-commerce platforms, blogs, and admin dashboards, using just one programming language – JavaScript.",
    image: "/course1.jpg",
    lessons: [
    "Lesson 1: HTML, CSS, JS Basics",
    " Lesson 2: React Frontend Development",
    " Lesson 3: Node & Express Backend APIs",
    " Lesson 4: MongoDB Integration",
    " Lesson 5: Deployment & Hosting"
  ],
  extras: [
    "Lifetime Access",
    "Certificate of Completion",
    " Full Source Code & Projects"
  ],
  duration: " 40 Hours"
  },
  {
    title: "Data Science & Analytics",
    description: "Analyze data to uncover insights and trends.",
    description1:
      "Master Full Stack Web Development using the powerful MERN stack – MongoDB, Express.js, React, and Node.js. This course is designed to help you build dynamic, data-driven web applications from scratch. You'll start by understanding the basics of frontend development using React, move on to creating robust backend APIs with Node.js and Express, and learn how to store and retrieve data using MongoDB. By the end of this course, you'll be able to build and deploy fully functional full-stack applications, such as e-commerce platforms, blogs, and admin dashboards, using just one programming language – JavaScript.",
    image: "/course2.jpg",
    lessons: [
    " Lesson 1: Python for Data Analysis",
    " Lesson 2: NumPy & Pandas",
    " Lesson 3: Data Visualization with Matplotlib",
    " Lesson 4: Exploratory Data Analysis",
    " Lesson 5: Real-World Projects"
  ],
  extras: [
    " Lifetime Access",
    " Certificate of Completion",
    " Downloadable Notebooks"
  ],
  duration: " 35 Hours"
  },
  {
    title: "Frontend        Development using react",
    description: "Master HTML, CSS, JavaScript and React.",
    description1:
      "Master Full Stack Web Development using the powerful MERN stack – MongoDB, Express.js, React, and Node.js. This course is designed to help you build dynamic, data-driven web applications from scratch. You'll start by understanding the basics of frontend development using React, move on to creating robust backend APIs with Node.js and Express, and learn how to store and retrieve data using MongoDB. By the end of this course, you'll be able to build and deploy fully functional full-stack applications, such as e-commerce platforms, blogs, and admin dashboards, using just one programming language – JavaScript.",
    image: "/course3.jpg",
    lessons: [
    "Lesson 1: HTML5 & CSS3",
    "Lesson 2: Responsive Web Design",
    " Lesson 3: JavaScript ES6+",
    " Lesson 4: React Components & State",
    " Lesson 5: API Integration"
  ],
  extras: [
    " Lifetime Access",
    " Certificate of Completion",
    " Mini Projects & Assignments"
  ],
  duration: "30 Hours"
  },
  {
    title: "Python for         Beginners with ugyan",
    description: "Start your programming journey with Python.",
    description1:
      "Master Full Stack Web Development using the powerful MERN stack – MongoDB, Express.js, React, and Node.js. This course is designed to help you build dynamic, data-driven web applications from scratch. You'll start by understanding the basics of frontend development using React, move on to creating robust backend APIs with Node.js and Express, and learn how to store and retrieve data using MongoDB. By the end of this course, you'll be able to build and deploy fully functional full-stack applications, such as e-commerce platforms, blogs, and admin dashboards, using just one programming language – JavaScript.",
    image: "/course4.jpg",
    lessons: [
    " Lesson 1: Python Syntax & Basics",
    " Lesson 2: Data Structures",
    " Lesson 3: Control Flow & Loops",
    " Lesson 4: Functions & Modules",
    " Lesson 5: Beginner Projects"
  ],
  extras: [
    " Lifetime Access",
    " Certificate of Completion",
    " Downloadable Practice Code"
  ],
  duration: " 25 Hours"
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
