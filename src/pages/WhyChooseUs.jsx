import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-container">
      <h1 className="why-main-heading">Why Choose Ugyan Tech?</h1>
      <p className="why-subheading">Empowering your future with real-world skills and expert guidance.</p>

      <div className="features-grid">
        <div className="feature-box">🎓 Top IIT Mentors</div>
        <div className="feature-box">📚 Easy Learning Modules</div>
        <div className="feature-box">💼 Real World Projects</div>
        <div className="feature-box">🧾 Internship Certificate</div>
        <div className="feature-box">🪪 Course Completion Certificate</div>
        <div className="feature-box">💰 Affordable Pricing</div>
        <div className="feature-box">⏰ Flexible Scheduling</div>
        <div className="feature-box">🚀 Career Guidance</div>
      </div>

      <h2 className="testimonial-heading">What Our Students Say</h2>
      <div className="testimonials">
        <div className="testimonial-card">
          <p className="testimonial-text">"The mentors are super helpful. The real-world projects gave me confidence to apply for internships!"</p>
          <h4>- Anjali, B.Tech CSE</h4>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"Affordable and high-quality content. Loved the flexibility to learn at my own pace."</p>
          <h4>- Rohan, Data Science Enthusiast</h4>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"The certificates and practical exposure helped me build a solid resume. Highly recommend!"</p>
          <h4>- Sneha, Final Year Student</h4>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
