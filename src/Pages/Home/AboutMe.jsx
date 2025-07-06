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
        <div
          className="about-image-container"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="./img/hero3.png"
            alt="Chief Godlove"
            className="person-photo"
          />
        </div>

        <div
          className="about-text-content"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <p className="section-label">About</p>
          <h2 className="about-heading">About Me</h2>
          <p className="about-description">
            Godlove Jackob Mwakibete, widely recognized as <strong>Chief Godlove</strong>, is a dynamic philanthropist, visionary spiritual healer, award-winning motivational speaker, and a respected prophet. He is the founder and driving force behind transformative ventures that uplift marginalized communities, empower youth, and inspire hope across Tanzania and beyond.
          </p>
          <p className="about-description">
            From humble beginnings in Mbeya, Chief Godlove has risen to national and continental prominence through relentless dedication to social impact, spiritual guidance, and economic empowerment. His journey is one of faith, vision, and action — touching thousands of lives through his ministry, charitable efforts, and public engagements.
          </p>
          <p className="about-description">
            Through the <strong>Chief Godlove Foundation</strong>, he has extended significant financial support to individuals and communities in need. Notable among his efforts is his contribution to the <strong>Kariakoo National Relief Fund</strong> and his direct assistance to victims of the Kariakoo incident, including the young man who was shot. These acts reflect his ongoing commitment to support and uplift those in crisis.
          </p>
          <p className="about-description">
            As the director of <strong>Chief Godlove Media</strong>, <strong>Chief Godlove Foundation</strong>, and <strong>Chief Godlove Company Ltd</strong>, he has built a structured and impactful platform for philanthropic action. Beyond giving, he actively engages with communities, encouraging others to participate in charitable causes and offering motivation rooted in compassion, resilience, and faith.
          </p>
        </div>
      </div>
    </section>
  );
}
