import React from "react";
import "../css/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-heading">Contact Us</h1>
      <p className="contact-us-subheading">We’d love to hear from you!</p>

      <div className="contact-us-content">
        {/* Contact Info */}
        <div className="contact-us-info">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> 123 Learning Lane, Edutech City, IN</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> contact@edutech.com</p>
          <p><strong>Hours:</strong> Mon - Fri, 9AM - 6PM</p>

          <div className="contact-us-social-links">
            <a href="#" className="contact-us-social linkedin">LinkedIn</a>
            <a href="#" className="contact-us-social twitter">Twitter</a>
            <a href="#" className="contact-us-social instagram">Instagram</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-us-form">
          <h2 className="contact-us-form-heading">Send your queries here</h2>
          <form>
            <input type="text" placeholder="Your Name" disabled />
            <input type="email" placeholder="Your Email" disabled />
            <input type="text" placeholder="Subject" disabled />
            <textarea placeholder="Your Message" rows="5" disabled></textarea>
            <button type="submit" disabled title="Static page only">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="contact-us-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.219340903797!2d144.96332!3d-37.814217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0a66b0d%3A0x5045675218ce6e0!2sIndia!5e0!3m2!1sen!2sin!4v1610000000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
