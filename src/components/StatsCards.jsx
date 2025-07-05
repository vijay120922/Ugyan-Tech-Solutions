import React from "react";
import "./StatsCards.css";

const stats = [
  { number: "50,000+", label: "Students Enrolled" },
  { number: "10,000+", label: "Students Placed" },
  { number: "2,000+", label: "Internships Provided" },
  { number: "15+", label: "Countries" },
];

const StatsCards = () => {
  return (
    <section className="stats-cards">
      {stats.map((item, index) => (
        <div key={index} className="stat-card">
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;
