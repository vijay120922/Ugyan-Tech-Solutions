import React from "react";
import "../css/AboutUs.css";
import { FaLightbulb, FaCompass } from "react-icons/fa";
import Carousel from "../components/Carousel.jsx";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="split-screen">
        <div className="top-half">
          <div className="hero-left">
            <h2>Empowering Education with Purpose</h2>
            <p>Driven by purpose. Focused on learners. Inspired by change.</p>
            <button>Our Story</button>
          </div>
          <div className="hero-right">
            <img
              src="https://readdy.ai/api/search-image?query=A%20modern%2C%20stylized%20graduation%20cap%20with%20purple%20accents%20floating%20above%20an%20open%20book%20with%20glowing%20pages%2C%20digital%20particles%20flowing%20around%20it%2C%20minimalist%20design%20with%20soft%20lighting%20effects%2C%20perfect%20for%20educational%20technology%20branding&width=800&height=800&seq=1&orientation=squarish"
              alt="Education Concept"
            />
          </div>
        </div>

        <div className="bottom-half">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <FaLightbulb size={40} />
                <h3>Our Vision</h3>
                <p>Hover to learn more</p>
              </div>
              <div className="card-back">
                <h3>Our Vision</h3>
                <p>To create a world where quality education is accessible to everyone.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <FaCompass size={40} />
                <h3>Our Mission</h3>
                <p>Hover to learn more</p>
              </div>
              <div className="card-back">
                <h3>Our Mission</h3>
                <p>To develop innovative educational technology for all learners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <h2>Our Journey in Pictures</h2>
        <p className="journey-text">
          Explore moments that define our culture, showcase our team, and highlight our commitment to transforming education.
        </p>
        <div classname="carousel"> {/* NOTE: typo here: 'classname' should be 'className' */}
          <Carousel />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
