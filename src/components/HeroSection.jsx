import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <video className="hero-bg-video" autoPlay muted loop>
        <source src="/edu-hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div className="floating-badge">🎓 EDU TECH 5.0</div> */}

      <div className="hero-content">
        <h1>
          Welcome to <span className="highlight">UGYAN</span> —<br />
          Unlock Your Knowledge
        </h1>
        <p>
          Explore top courses, hands-on projects, and mentorship from the best minds in education.
          Empower your journey with cutting-edge tech.
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
