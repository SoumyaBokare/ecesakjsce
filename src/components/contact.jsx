import { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ssv4zc', 'template_63nsa0l', form.current, 'g6XLSb9OTzJOwqXbA')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/"><img src='../public/assets/images/logo.jpg' alt="e-CESA Logo" /></Link> {/* Use the correct path to the logo image */}
        </div>
        <ul className="nav-links">
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/notemate">Notemate</Link></li>
        </ul>
      </nav>
      <div className="bg-card-container">
        <div className="bg-card">
          <div className="main-content">
            <div className="left">
              <h1>Get in Touch</h1>
              <ul className="contact-icons">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:example@example.com">
                    <i className="fas fa-envelope"></i>Mail
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="partition"></div>
            <div className="right">
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;