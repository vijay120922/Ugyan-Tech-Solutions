import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us-wrapper">
      {/* Intro Section */}
      <div className="intro-section">
        <h1 className="main-heading">Online Education Tailored to You</h1>
        <p className="description">
          Unlock your true potential and discover a world of opportunities that align
          with your skills, interests, and aspirations
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="vision-mission">
        <div className="card">
          <h3>📊 Vision</h3>
          <p>
            At UGYAN Learning, our vision is to create a world where learning is celebrated,
            knowledge acquisition is limitless, nurturing talent is paramount, and excellence
            is the standard in every pursuit. We envision a community where individuals thrive
            through continuous growth and development, shaping a brighter future for generations to come.
          </p>
        </div>
        <div className="card">
          <h3>🎓 Mission</h3>
          <p>
            Our mission is to cultivate a dynamic learning ecosystem that empowers individuals to embark on
            a journey of discovery, acquisition, and mastery. Through innovative programs, personalized support,
            and collaborative partnerships, we strive to nurture talent, foster creativity, and inspire a
            lifelong passion for learning.
          </p>
        </div>
      </div>

      {/* Ugyan Description Section */}
      <div className="ugyan-description">
        <div className="image-group">
          <img src="/course1.jpg" alt="Student 1" className="large-img" />
          <img src="/course2.jpg" alt="Student 2" className="small-img" />
        </div>
        <div className="info-box">
          <h2>Welcome to Ugyan</h2>
          <p>
            UGyan is built on the foundation that knowledge is the key to boundless possibilities.
            By equipping yourself with knowledge, you gain the tools and understanding to break through
            barriers and reach your full potential.
          </p>
          <p>
            UGyan's motto, "Unlock Your Knowledge," reflects this belief. It’s a powerful call to action,
            urging individuals to take charge of their learning journey and use knowledge as the springboard
            to achieving their dreams.
          </p>
          <div className="features">
            <span>📚 Industry Knowledge</span>
            <span>💻 Online Courses</span>
          </div>
          <button className="enroll-btn">ENROLL TODAY →</button>
        </div>
      </div>

      {/* Team Section */}
      <div className="choose-grid">
        <div className="row">
          <div className="image-box green-bg">
            <img src="/man1.png" alt="Team Member 1" />
          </div>
          <div className="text-box shadow-box">
            <p>
              <strong>Dr. Emily Chen</strong>
              <br />
              Expert educator with 15+ years in e-learning. Passionate about helping students unlock their potential
              through engaging content and modern pedagogy.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="text-box shadow-box">
            <p>
              <strong>Dr. Michael Lee</strong>
              <br />
              Tech visionary and mentor. Michael brings real-world projects and hands-on training to UGyan’s platform,
              making learning practical and job-ready.
            </p>
          </div>
          <div className="image-box peach-bg">
            <img src="/man2.png" alt="Team Member 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
