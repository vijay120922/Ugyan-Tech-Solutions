import React, { useEffect, useState } from 'react';
import './TrustedBy.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const companyLogos = [
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
];

const TrustedBy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="trusted-by-section">
      <div className="top-row">
        <div className="carousel scroll-right">
          <div className="carousel-track">
            {(loading ? Array(6).fill("") : [...companyLogos, ...companyLogos]).map((logo, index) => (
              <div key={index} className="carousel-logo-wrapper">
                {loading ? (
                  <Skeleton height={60} width={100} />
                ) : (
                  <img src={logo} alt={`Logo ${index}`} className="carousel-logo" />
                )}
              </div>
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
            {(loading ? Array(6).fill("") : [...companyLogos, ...companyLogos]).map((logo, index) => (
              <div key={index} className="carousel-logo-wrapper">
                {loading ? (
                  <Skeleton height={60} width={100} />
                ) : (
                  <img src={logo} alt={`Logo ${index}`} className="carousel-logo" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
