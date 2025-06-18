import React from "react";
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import WhyChooseUs from './WhyChooseUs';
import CoursesSection from "./CoursesSection";
import './HomePage.css'; 

const HomePage = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/homebg.jpeg')" }}
      >
        <Navbar />
        <div className="homepage">
          <section className="hero-section">
            <div className="top-badge">🎓 Your #1 Platform for Skill Learning</div>
            <h1 className="main-heading">
              Showcase Your Mastery.<br />Get Connected
            </h1>

            <div className="search-bar">
              <input type="text" placeholder="Search Courses" className="search-input" />
              <button className="search-button">Search</button>
            </div>
          </section>
        </div>
      </div>

      {/* Carousel comes below hero */}
      <section className="carousel-section">
        <Carousel />
      </section>

      {/* Why Choose Us section */}
      <section className="why-choose-section">
        <WhyChooseUs />
      </section>

      <section>
        <CoursesSection />
      </section>

    </>
  );
};

export default HomePage;
