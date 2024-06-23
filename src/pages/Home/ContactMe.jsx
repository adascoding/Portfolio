import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "", // Replace with your EmailJS service ID
        "", // Replace with your EmailJS template ID
        formRef.current,
        "" // Replace with your EmailJS public API key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h3 className="section-sub-heading">Get In Touch</h3>
        <h2 className="section-heading">Contact Me</h2>
        <p>
          Thank you for visiting my portfolio. If you have any questions or would
          like to discuss a project, please feel free to reach out to me via
          the following contact details or by filling out the form below.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span className="p1">adas.alvikas@gmail.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span className="p1">+44 7493 707 378</span>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button disabled type="submit" className="submit-button">
            Submit
          </button>
        </form>

        <p className="contact-disclaimer">
          Please note that by submitting this form, you consent to us processing
          your information in accordance with our privacy policy.
        </p>
      </div>
    </section>
  );
}
