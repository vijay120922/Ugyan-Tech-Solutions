import React from "react";
import "./ContactUsSection.css";

const ContactUsSection = () => {
  return (
    <section className="contact-us-wrapper">
      <div className="contact-us-inner">
        <h2 className="contact-heading">Get in touch</h2>
        <p className="contact-subheading">
          We'd love to hear from you. Drop us a message!
        </p>

        <div className="contact-us-form">
          <h2 className="contact-us-form-heading">Let us call you back</h2>
          <form className="contact-form-elements">
            <input type="text" placeholder="Your Name" disabled />
            <input type="number" placeholder="Your contact number" disabled />
            <button
              type="submit"
              disabled
              className="send-button"
              title="Static page only"
            >
              Request a call back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
