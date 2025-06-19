// src/components/ContactUs.jsx
import React from 'react';
import './ContactUsSection.css';

const ContactUsSection = () => {
  return (
    <div className="contact-us-section">
  <h2 className="contact-heading">
    Contact Us
  </h2>
  <p className="contact-subheading">
  We'd love to hear from you. Drop us a message! </p>
  <div className="contact-form">
    <input
      type="text"
      placeholder="Your message..."
      className="contact-textarea"
    />
    <button className="send-button">Send</button>
  </div>
</div>

  );
};

export default ContactUsSection;
