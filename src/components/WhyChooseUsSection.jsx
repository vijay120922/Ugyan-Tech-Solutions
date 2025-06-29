import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './WhyChooseUsSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const features = [
  { title: "Top IIT Mentors", description: "Learn from experienced mentors from premier IITs.", icon: "🎓" },
  { title: "Easy & Effective Learning", description: "Beginner-friendly content with real-world examples.", icon: "📚" },
  { title: "Flexible Learning", description: "Access content anytime, anywhere at your pace.", icon: "⏱️" },
  { title: "Affordable Pricing", description: "High-quality education at budget-friendly prices.", icon: "💰" },
  { title: "Internship Certificate", description: "Earn certificates after completing internships.", icon: "📜" },
  { title: "Real-World Projects", description: "Build hands-on skills with real industry projects.", icon: "🛠️" },
  { title: "Course Completion Certificate", description: "Get certified for each course you complete.", icon: "🎖️" }
];

const WhyChooseUsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="why-us-section">
      <h2 className="why-title">Why Choose Ugyan Tech?</h2>

      {loading ? (
        <div className="features-carousel skeleton-slider">
          {[...Array(4)].map((_, i) => (
            <div className="feature-card-wrapper" key={i}>
              <div className="feature-card">
                <Skeleton circle height={50} width={50} />
                <Skeleton height={20} width={140} style={{ margin: '10px 0' }} />
                <Skeleton count={2} width={180} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings} className="features-carousel">
          {features.map((item, index) => (
            <div key={index} className="feature-card-wrapper">
              <div className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default WhyChooseUsSection;
