export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Godlove Mwakibete</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Motivation</span>{" "}
            <br />
            Speaker
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img modern-hero-img">
        <div className="image-background-shape">
              <img className="hero-person-image" src="./img/hero3.png" alt="Hero Section" />
              <img className="sparkle sparkle-top-left" src="./img/sparkl.png" alt="" />
              <img className="sparkle sparkle-bottom-right" src="./img/sparkl.png" alt="" />
        </div>
        
      </div>
    </section>
  );
}
