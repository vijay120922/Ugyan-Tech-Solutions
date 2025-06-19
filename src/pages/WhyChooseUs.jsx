import './WhyChooseUs.css';

const highlights = [
  {
    title: "Top IIT Mentors",
    description: "Learn from the brightest minds who bring deep insights and industry expertise.",
    emoji: "🎓"
  },
  {
    title: "Flexible Learning",
    description: "Self-paced modules with lifetime access so you can learn anytime, anywhere.",
    emoji: "🕒"
  },
  {
    title: "Affordable Pricing",
    description: "High-quality education at a cost that won't burden your pockets.",
    emoji: "💰"
  },
  {
    title: "Internship Certificate",
    description: "Earn a certificate upon completing your internship, boosting your portfolio.",
    emoji: "📄"
  },
  {
    title: "Real World Projects",
    description: "Hands-on projects designed to simulate real job tasks and industry challenges.",
    emoji: "💻"
  },
  {
    title: "Course Completion Certificate",
    description: "Every course comes with a valuable completion certificate to showcase your skills.",
    emoji: "🏆"
  }
];

const testimonials = [
  {
    name: "Aarav Mehta",
    image: "/course1.jpg",
    review: "Ugyan Tech changed the way I learn. The mentors are truly top-tier and the support system is fantastic!"
  },
  {
    name: "Saanvi Sharma",
    image: "/course2.jpg",
    review: "The real-world projects and the flexibility of the program helped me grow at my pace. Highly recommended!"
  },
  {
    name: "Rohan Verma",
    image: "/course3.jpg",
    review: "Internship + certification = perfect package. I feel job-ready and confident after completing my course."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-page">
      <section className="highlight-section">
        <h2 className="section-title">Why Choose Ugyan Tech?</h2>
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-emoji">{item.emoji}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <h2 className="testimonial-title">Hear from Our Students</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.image} alt={t.name} className="testimonial-img" />
              <p className="testimonial-review">"{t.review}"</p>
              <h4 className="testimonial-name">- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
