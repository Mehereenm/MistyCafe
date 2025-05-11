import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar" id="topnav">
        <Link to="/" className="logo">Misty Cafe</Link>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact" className="active">Contact</Link>
        <Link to="/about">About</Link>
        <a
          href="#"
          className="icon"
          onClick={() => document.getElementById("topnav").classList.toggle("responsive")}
        >
          <i className="fa fa-bars"></i>
        </a>
      </div>

      {/* Location Section */}
      <div className="LocationMap">
        <h3>Location</h3>
        <img className="mapimg" src="/img/Maps.png" alt="Map" />
      </div>

      {/* Contact Form */}
      <h3>Contact Us</h3>
      <div className="form">
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! We'll be in touch.");
        }}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your first name.." required />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email.." required />

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} required />

          <input type="submit" value="Submit" />
        </form>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="social-media-links">
            <h2>Follow Us</h2>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <div className="business-hours">
            <h2>Business Hours</h2>
            <p className="business">Monday - Friday: 8:00 AM - 9:00 PM</p>
            <p className="business">Saturday - Sunday: 9:00 AM - 10:00 PM</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
