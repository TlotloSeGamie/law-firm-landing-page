import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-container">
        <div className="intouch-texts">
          <h5>Contact</h5>
          <h2>
            Get in <span>Touch</span> With Us
          </h2>
          <p>
            We're here to answer your questions and help you get started with
            StartUp Legal
          </p>
        </div>
        <div className="messaging">
          <div className="credientials">
            <div className="cred-inputs">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  placeholder="Type your name..."
                  className="input-field"
                />
            </div>

            <div className="cred-inputs">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  placeholder="Type your email..."
                  className="input-field"
                />
                          </div>
            </div>

          <div className="message-section">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                placeholder="Enter your message..."
                className="input-field"
              ></textarea>
          </div>
        </div>
        <div className="bottom-section">
            <p className="footer-text">
            By submitting this form I consent to the processing of the personal data that I have provided and declare my agreement with the data protection regulations in the data privacy statement
            </p>
            <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
