import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <h2>GODLOVE</h2>
        </div>

        <div className="footer--items">
         
        </div>

        {/* Contact Info */}
        <div className="footer--contact--info">
          <div className="contact--item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M2 4.5C2 3.67 2.67 3 3.5 3H6.2C6.62 3 6.99 3.25 7.15 3.63L8.77 7.6C8.93 7.97 8.87 8.4 8.6 8.7L7.11 10.35C8.41 13.19 10.81 15.59 13.65 16.89L15.3 15.4C15.6 15.13 16.03 15.07 16.4 15.23L20.37 16.85C20.75 17.01 21 17.38 21 17.8V20.5C21 21.33 20.33 22 19.5 22H17C9.27 22 2.99999 15.73 2.99999 8V5.5H3.5C2.67 5.5 2 4.83 2 4.5Z"
                fill="black"
              />
            </svg>
            <span>+255 748 830 617</span>
          </div>
          <div className="contact--item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM20 6L12 13L4 6H20ZM4 18H20V8L12 15L4 8V18Z"
                fill="black"
              />
            </svg>
            <span>godlovemwakibete12@gmail.com</span>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Centered Bottom Menu */}
      <div className="footer--bottom--menu">
        <ul>
          <li>
            <Link to="Privacy_Policy" className="text-sm" smooth={true} offset={-70} duration={500}>Privacy Policy</Link>
          </li>
          <li>
            <Link to="Terms_of_Service" className="text-sm" smooth={true} offset={-70} duration={500}>Terms of Service</Link>
          </li>
          <li>
            <Link to="Cookies_Settings" className="text-sm" smooth={true} offset={-70} duration={500}>Cookies Settings</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
