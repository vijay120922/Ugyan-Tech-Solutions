import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/carousel1.jpg",
    buttonText: "Explore Courses",
    link: "/courses",
  },
  {
    image: "/carousel2.jpg",
    buttonText: "Know Us More",
    link: "/about-us",
  },
  {
    image: "/carousel3.jpg",
    buttonText: "Why Choose Us?",
    link: "/why-choose-us",
  },
];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}></div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}></div>
);

const Carousel = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace this with real data loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };

  if (loading) {
    return (
      <div className="carousel-container">
        <div className="carousel-slide">
          <div className="carousel-img-wrapper">
            <Skeleton height={500} borderRadius={20} />
            <Skeleton
              height={50}
              width={180}
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                borderRadius: 30,
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-img-wrapper">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="carousel-img"
              />
              <button
                className="carousel-btn"
                onClick={() => navigate(slide.link)}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
