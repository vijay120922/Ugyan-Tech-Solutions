import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UgyanText from "./UgyanText";
import "./HeroSection.css";

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        {loading ? (
          <Skeleton width={220} height={36} style={{ margin: "0 auto" }} />
        ) : (
          <UgyanText
            sentence="Ugyan EduTech"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        )}

        <br />

        <h1>
          {loading ? (
            <Skeleton width={480} height={45} style={{ margin: "16px auto" }} />
          ) : (
            <>
              Transforming <span className="highlight">Education</span> for Every Learner
            </>
          )}
        </h1>

        <p>
          {loading ? (
            <Skeleton count={2} width={700} style={{ margin: "0 auto" }} />
          ) : (
            "Discover personalized online learning crafted by top educators. Empower your career with skill-based, practical courses and internship-backed experiences."
          )}
        </p>

        <div className="hero-buttons">
          {loading ? (
            <>
              <Skeleton width={160} height={44} borderRadius={30} />
              <Skeleton width={140} height={44} borderRadius={30} />
            </>
          ) : (
            <>
              <button className="btn explore">Explore Courses</button>
              <button className="btn enroll">Enroll Now</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
