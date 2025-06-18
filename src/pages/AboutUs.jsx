import './wcw.css';

const AboutUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Who are we?</h2>
      <p className="subheading">
        Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
      </p>

      <div className="choose-grid">
        {/* Row 1: Image Left, Text Right */}
        <div className="row">
          <div className="image-box green-bg">
            <img src="/man1.png" alt="Team Member 1" />
          </div>
          <div className="text-box shadow-box">
            <p>
              <strong>Dr. Emily Chen</strong><br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In excepturi quae blanditiis doloribus est, temporibus possimus unde nisi voluptatibus. Iusto voluptas ad aspernatur aperiam et eos unde asperiores quasi! Quaerat.
            </p>
          </div>
        </div>

        {/* Row 2: Text Left, Image Right + Arrow */}
        <div className="row">
          <div className="arrow-container">
            <div className="text-box shadow-box">
              <p>
                <strong>Dr. Emily Chen</strong><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempore amet ipsa dolores quis, adipisci error esse ipsum delectus aut temporibus natus exercitationem eveniet quae. Natus laborum porro possimus nam!
              </p>
            </div>
            {/* <img src="/arrow.jpng" alt="arrow" className="heart-arrow" /> */}
          </div>
          <div className="image-box peach-bg">
            <img src="/man2.png" alt="Team Member 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
