import React from "react";
import "./ContactUsSection.css";

const ContactUsSection = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-section">
        <h2 className="contact-heading">Get in touch</h2>
        <p className="contact-subheading">
          We'd love to hear from you. Drop us a message!
        </p>

        <div className="contact-us-form">
          <h2 className="contact-us-form-heading">Let us call you back</h2>
          <form>
            <input type="text" placeholder="Your Name" disabled />
            {/* <input type="email" placeholder="Your Email" disabled /> */}
            <input type="number" placeholder="Your contact number" disabled />
            {/* <input type="text" placeholder="Subject" disabled />
            <textarea placeholder="Your Message" rows="5" disabled></textarea> */}
            <button type="submit" disabled className="send-button" title="Static page only">
              Request a call back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
