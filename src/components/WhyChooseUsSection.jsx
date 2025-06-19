// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUsSection.css';

const features = [
  {
    title: "Top IIT Mentors",
    description: "Learn from experienced mentors from premier IITs.",
    icon: "🎓"
  },
  {
    title: "Easy & Effective Learning",
    description: "Beginner-friendly content with real-world examples.",
    icon: "📚"
  },
  {
    title: "Flexible Learning",
    description: "Access content anytime, anywhere at your pace.",
    icon: "⏱️"
  },
  {
    title: "Affordable Pricing",
    description: "High-quality education at budget-friendly prices.",
    icon: "💰"
  },
  {
    title: "Internship Certificate",
    description: "Earn certificates after completing internships.",
    icon: "📜"
  },
  {
    title: "Real-World Projects",
    description: "Build hands-on skills with real industry projects.",
    icon: "🛠️"
  },
  {
    title: "Course Completion Certificate",
    description: "Get certified for each course you complete.",
    icon: "🎖️"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="why-us-section">
      <h2 className="why-title">Why Choose Ugyan Tech?</h2>
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
