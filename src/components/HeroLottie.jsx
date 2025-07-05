// Example: src/components/HeroLottie.jsx
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1751692063372.json"; // path to your JSON

const HeroLottie = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default HeroLottie;
