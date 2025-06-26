import React from "react";
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import AboutUsSection from '../components/AboutUsSection';
import CoursesSection from "../components/CoursesSection";
import ContactUsSection from "../components/ContactUsSection";
import TrustedBy from '../components/TrustedBy';
import Footer from '../components/Footer';
import '../css/HomePage.css'; 

const HomePage = () => {
  return (
    <>
      {/* <div
        className="homepage-main bg-cover bg-center"
      >
        <div className="homepage">
          <section className="hero-section">
             <div className="badge-container border">
            <div className="top-badge">🎓 Your #1 Platform for Skill Learning</div></div>
            <h1 className="main-heading">
              Showcase Your Mastery.<br />Get Connected
            </h1> 
            <div className="search-bar">
              <input type="text" placeholder="Search Courses" className="search-input w-full" />
              <button className="search-button">Search</button>
            </div>
          </section>
        </div>
      </div> */}
      <section className="Herosection">
        <HeroSection />
      </section>
      <section className="carousel-section">
        <Carousel />
      </section>
      
      <section className="fade-bottom">
        <CoursesSection />
      </section>
      
      <section>
        <WhyChooseUsSection />
      </section>
      <section className="why-choose-section">
        <AboutUsSection />
      </section>
      <section>
        <TrustedBy />
      </section>
      <section className="contact-us-section">
        <ContactUsSection />
      </section>
    </>
  );
};

export default HomePage;
