import './wcw.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <p className="subheading">
        Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
      </p>

      <div className="choose-grid">
        {/* Image Box 1 */}
        <div className="image-box green-bg">
          <img src="/man1.png" alt="Team Member 1" />
        </div>

        {/* Text Box 1 */}
        <div className="text-box shadow-box">
          <p>
            <strong>Dr. Emily Chen</strong><br />
            With over 15 years of experience in educational technology, Dr. Chen has revolutionized how we approach learning in the digital age. Her vision combines cutting-edge technology with proven pedagogical methods to create truly transformative educational experiences.
          </p>
        </div>

        {/* Text Box 2 */}
        <div className="text-box shadow-box">
          <p>
            <strong>Dr. Emily Chen</strong><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempore amet ipsa dolores quis, adipisci error esse ipsum delectus aut temporibus natus exercitationem eveniet quae. Natus laborum porro possimus nam!
          </p>
        </div>

        {/* Image Box 2 */}
        <div className="image-box peach-bg">
          <img src="/man2.png" alt="Team Member 2" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
