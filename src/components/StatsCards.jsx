import React from "react";
import "./StatsCards.css";
import CountUp from "./CountUp.jsx";

const stats = [
  { number: 50000, label: "Students Enrolled" },
  { number: 10000, label: "Students Placed" },
  { number: 2000, label: "Internships Provided" },
  { number: 15, label: "Countries" },
];

const StatsCards = () => {
  return (
    <section className="stats-cards">
      {stats.map((item, index) => (
        <div key={index} className="stat-card">
          <h2>
            <CountUp
              from={0}
              to={item.number}
              separator=","
              duration={2}
              className="count-up-text"
            />
            {item.number >= 1000 ? "+" : ""}
          </h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;
