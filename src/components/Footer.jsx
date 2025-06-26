import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section company-info">
          <h2 className="footer-logo">Ugyan Edutech</h2>
          <p>Empowering Learning, Empowering Lives</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@ugyan.in</p>
          <p>Phone: +91 79751 65470</p>
          <p>Location:</p>
          <div className="map-wrapper">
            <iframe 
              title="Google Map" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62218.11065641293!2d77.66988807060254!3d12.931362919166437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x659d12bf5498f4e7%3A0x8ef08c377c391150!2sUGYAN%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1750866136697!5m2!1sen!2sin" 
              allowFullScreen 
              loading="lazy">
            </iframe>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Ugyan Tech Solutions. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
