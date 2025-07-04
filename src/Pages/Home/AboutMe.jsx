import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="AboutMe" className="about-section" data-aos="fade-up">
      <div className="about-content-wrapper">
        {/* Image Section */}
        <div
          className="about-image-container"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img src="./img/brush.png" alt="Brush" className="brush-bg" />
          <img
            src="./img/hero3.png"
            alt="Chief Godlove"
            className="person-photo"
            data-aos="fade-in"
            data-aos-delay="300"
          />
        </div>

        {/* Text Section */}
        <div
          className="about-text-content"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <p className="section-label">About</p>
          <h2 className="about-heading">About Me</h2>
          <p className="about-description" data-aos="fade-left" data-aos-delay="500">
            Godlove Jackob Mwakibete, widely recognized as <strong>Chief Godlove</strong>,
            is a dynamic philanthropist, visionary spiritual healer, award-winning
            motivational speaker, and a respected prophet. He is the founder and driving
            force behind multiple transformative ventures that uplift marginalized
            communities, empower youth, and inspire hope across Tanzania and beyond.
          </p>
          <p className="about-description" data-aos="fade-left" data-aos-delay="600">
            From humble beginnings in Mbeya, Chief Godlove has risen to national and
            continental prominence through relentless dedication to social impact,
            spiritual guidance, and economic empowerment. His journey is one of faith,
            vision, and action — touching thousands of lives.
          </p>
        </div>
      </div>
    </section>
  );
}
