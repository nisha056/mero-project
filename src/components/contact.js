import React, { useState } from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1>Contact</h1>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required></textarea>
            </div>
            <button type="submit" className="button send-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
