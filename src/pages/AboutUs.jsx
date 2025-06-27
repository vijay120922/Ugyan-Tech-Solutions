import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../css/AboutUs.css";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about-us-wrapper">
      {/* Intro Section */}
      <div className="intro-section">
        <h1 className="main-heading">
          {loading ? <Skeleton width={320} /> : "Online Education Tailored to You"}
        </h1>
        <p className="description">
          {loading ? <Skeleton count={2} width={700} /> : "Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations"}
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="vision-mission">
        {[...Array(2)].map((_, idx) => (
          <div className="card" key={idx}>
            <div className="card-header">
              <h2 className="card-title">
                {loading ? <Skeleton width={100} /> : idx === 0 ? "Vision" : "Mission"}
              </h2>
            </div>
            <p className="card-description">
              {loading ? <Skeleton count={4} /> : idx === 0
                ? "At UGYAN Learning, our vision is to create a world where learning is celebrated..."
                : "Our mission is to cultivate a dynamic learning ecosystem..."}
            </p>
          </div>
        ))}
      </div>

      {/* Ugyan Description Section */}
      <div className="ugyan-description reverse-layout">
        <div className="info-box card-animate">
          <h2>{loading ? <Skeleton width={200} /> : "Welcome to Ugyan"}</h2>
          <p>
            {loading ? <Skeleton count={3} /> :
              "UGyan is built on the foundation that knowledge is the key to boundless possibilities..."}
          </p>
          <p>
            {loading ? <Skeleton count={2} /> :
              "UGyan's motto, 'Unlock Your Knowledge,' reflects this belief..."}
          </p>
          <div className="features">
            {loading ? (
              <>
                <Skeleton width={120} />
                <Skeleton width={120} />
              </>
            ) : (
              <>
                <span>Industry Knowledge</span>
                <span>Online Courses</span>
              </>
            )}
          </div>
          {loading ? (
            <Skeleton width={160} height={44} style={{ marginTop: "20px", borderRadius: "30px" }} />
          ) : (
            <button className="enroll-btn">ENROLL TODAY →</button>
          )}
        </div>

        <div className="image-group">
          {loading ? (
            <>
              <Skeleton className="large-img" height={260} />
              <Skeleton className="small-img" height={180} />
            </>
          ) : (
            <>
              <img src="/course1.jpg" alt="Course 1" className="large-img" />
              <img src="/course2.jpg" alt="Course 2" className="small-img" />
            </>
          )}
        </div>
      </div>

      {/* Team Section */}
      <div className="choose-grid">
        {[1, 2].map((item, index) => (
          <div className="row" key={index}>
            {(index % 2 === 0 || loading) && (
              <div className={`image-box ${index % 2 === 0 ? "green-bg" : "peach-bg"}`}>
                {loading ? <Skeleton width="100%" height="100%" /> : <img src={`/man${item}.png`} alt={`Team Member ${item}`} />}
              </div>
            )}
            <div className="text-box shadow-box">
              {loading ? (
                <Skeleton count={3} />
              ) : (
                <p>
                  <strong>{index === 0 ? "Dr. Emily Chen" : "Dr. Michael Lee"}</strong>
                  <br />
                  {index === 0
                    ? "Expert educator with 15+ years in e-learning..."
                    : "Tech visionary and mentor..."}
                </p>
              )}
            </div>
            {(index % 2 !== 0 && !loading) && (
              <div className={`image-box ${index % 2 === 0 ? "green-bg" : "peach-bg"}`}>
                <img src={`/man${item}.png`} alt={`Team Member ${item}`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
