import "./HeroSection.css";

import UgyanText from "./UgyanText";



const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      


      {/* Hero Content */}
      <div className="hero-content">

      <UgyanText
      sentence="Ugyan EduTech"
      manualMode={false}
      blurAmount={5}
      borderColor="red"
      animationDuration={2}
      pauseBetweenAnimations={1}
      />
      <br />
     
        <h1>
          Transforming <span className="highlight">Education</span> for Every Learner
        </h1>
        <p>
          Discover personalized online learning crafted by top educators. Empower your career with
          skill-based, practical courses and internship-backed experiences.
        </p>
        <div className="hero-buttons">
          <button className="btn explore">Explore Courses</button>
          <button className="btn enroll">Enroll Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;