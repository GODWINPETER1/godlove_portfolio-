import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2>GODLOVE</h2>
          <p className="footer__tagline">Empowering Lives, Inspiring Change</p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="heroSection" smooth offset={-70} duration={500}>Home</Link></li>
            <li><Link to="AboutMe" smooth offset={-70} duration={500}>About</Link></li>
            <li><Link to="MyPortfolio" smooth offset={-70} duration={500}>Ventures</Link></li>
            <li><Link to="Mission" smooth offset={-70} duration={500}>Mission</Link></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <div className="contact--item">
            📞 <span>+255 748 830 617</span>
          </div>
          <div className="contact--item">
            📧 <span>godlovemwakibete12@gmail.com</span>
          </div>
        </div>
      </div>

      <hr className="footer__divider" />

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} GODLOVE. All Rights Reserved.</p>
        <div className="footer__legal">
          <Link to="Privacy_Policy" smooth offset={-70} duration={500}>Privacy Policy</Link>
          <Link to="Terms_of_Service" smooth offset={-70} duration={500}>Terms of Service</Link>
          <Link to="Cookies_Settings" smooth offset={-70} duration={500}>Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
