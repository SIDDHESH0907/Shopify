import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-page">
          <h1>Contact Us</h1>
          <p>
            Thank you for choosing Shopify! If you have any questions or
            inquiries, feel free to reach out to us.
          </p>

          <div className="contact-info">
            <h2>Customer Support</h2>
            <p>Email: support@shopify.com</p>
            <p>Phone: +91 123-456-7890</p>
          </div>

          <div className="business-hours">
            <h2>Business Hours</h2>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>

          <div className="location">
            <h2>Our Location</h2>
            <p>
              Spotify Headquarters
              <br />
              123 Tech Street, Mumbai, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
