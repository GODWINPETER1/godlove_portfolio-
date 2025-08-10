import { Link } from "react-scroll";
import React from "react";
import { FaTwitter, FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2>GODLOVE</h2>
          <p className="footer__tagline">Empowering Lives, Inspiring Change</p>

          {/* Social Media Links */}
          <div className="footer__socials">
            
            <a href="https://x.com/chiefgodlove1/status/1952408474412802253?s=12" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/chiefgodlove_billionaire?igsh=MXRhNGpidTZpOTV5Zw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://vm.tiktok.com/ZMSoQAbbs/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://vm.tiktok.com/ZMSoQAbbs/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.youtube.com/@Chief_godlove?reload=9" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Quick Link</h4>
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
            <p> 📞 +255 748 830 617 </p>
            <p> 📞 +255 756 382 285</p>
            <p> 📞 +255 746 166 686 </p>
            <p> 📞 +255 758 844 962 </p>
          </div>
          <div className="contact--item">
             <p>📧 godlovemwakibete12@gmail.com</p>
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
