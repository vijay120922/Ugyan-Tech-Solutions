import React, { useEffect, useState } from 'react';
import './AboutUsSection.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutUsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="why-choose-us mt-5">
      <h2>Who are We ?</h2>
      <p className="subheading">
        {loading ? <Skeleton width={500} height={20} /> : `Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations`}
      </p>

      <div className="choose-grid">
        {/* Row 1 */}
        <div className="row">
          <div className="image-box green-bg">
            {loading ? (
              <Skeleton height={300} width={300} borderRadius={20} />
            ) : (
              <img src="/dp.jpg" alt="Team Member 1" />
            )}
          </div>
          <div className="text-box shadow-box">
            {loading ? (
              <div>
                <Skeleton height={20} width={200} style={{ marginBottom: 10 }} />
                <Skeleton count={4} />
              </div>
            ) : (
              <p>
                <strong>Dr. Emily Chen</strong><br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In excepturi quae blanditiis doloribus est, temporibus possimus unde nisi voluptatibus. Iusto voluptas ad aspernatur aperiam et eos unde asperiores quasi! Quaerat.
              </p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="arrow-container">
            <div className="text-box shadow-box">
              {loading ? (
                <div>
                  <Skeleton height={20} width={200} style={{ marginBottom: 10 }} />
                  <Skeleton count={4} />
                </div>
              ) : (
                <p>
                  <strong>Dr. Emily Chen</strong><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempore amet ipsa dolores quis, adipisci error esse ipsum delectus aut temporibus natus exercitationem eveniet quae. Natus laborum porro possimus nam!
                </p>
              )}
            </div>
          </div>
          <div className="image-box peach-bg">
            {loading ? (
              <Skeleton height={300} width={300} borderRadius={20} />
            ) : (
              <img src="/dp.jpg" alt="Team Member 2" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
