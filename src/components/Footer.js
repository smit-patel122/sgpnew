import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="logo">
    
      </h1>
      <div className="footer-content">
        <div className="footer-column">
          <h2>About Us</h2>
          <a href="#">Aim</a>
          <a href="#">Vision</a>
          <a href="#">Testimonials</a>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          <a href="#">Writing</a>
          <a href="#">Internships</a>
          <a href="#">Coding</a>
          <a href="#">Teaching</a>
        </div>
        <div className="footer-column">
          <h2>Contact Us</h2>
          <a href="#">Uttar Pradesh</a>
          <a href="#">Ahmedabad</a>
          <a href="#">Indore</a>
          <a href="#">Mumbai</a>
        </div>
        <div className="footer-column">
          <h2>Social Media</h2>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
            Facebook
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
            Instagram
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
            Twitter
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
