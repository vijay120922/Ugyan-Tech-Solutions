import React from 'react';
import './TrustedBy.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // optional

const companyLogos = [
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
];

const TrustedBy = () => {
  return (
    <div className="trusted-by-section">
      <div className="top-row">
        <div className="carousel scroll-right">
          <div className="carousel-track">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index}`} className="carousel-logo" />
            ))}
          </div>
        </div>
        <div className="heading-block">
          <h2>Trusted by</h2>
          <FaArrowLeft className="arrow-icon" />
        </div>
      </div>

      <div className="bottom-row">
        <div className="heading-block">
          <h2>Hiring at</h2>
          <FaArrowRight className="arrow-icon" />
        </div>
        <div className="carousel scroll-left">
          <div className="carousel-track">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index}`} className="carousel-logo" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
