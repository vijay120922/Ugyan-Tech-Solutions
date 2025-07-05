// src/components/TypingTagline.jsx
import React from "react";
import Typewriter from "react-typewriter-effect";
import "./TypingTagline.css";

const TypingTagline = () => {
  return (
    <div className="typing-tagline">
      <span className="static-text">Learn from the Best in </span>
      <Typewriter
        textStyle={{ display: "inline", fontWeight: "bold", color: "#6a1b9a" }}
        startDelay={100}
        cursorColor="#6a1b9a"
        multiText={[
          "Data Science",
          "Web Development",
          "VLSI",
          "Generative AI ",
          "Machine learning,"
        ]}
        multiTextDelay={1500}
        typeSpeed={70}
        deleteSpeed={50}
        multiTextLoop
      />
    </div>
  );
};

export default TypingTagline;
