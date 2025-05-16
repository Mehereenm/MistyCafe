import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  // Sidebar toggle handler (for mobile menu)
  const toggleSidebar = () => {
    document.getElementById("mobile-menu").classList.toggle("active");
  };

  const closeSidebar = () => {
    document.getElementById("mobile-menu").classList.remove("active");
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar" id="topnav">
      <div className="nav-links">
        <Link to="/" className="logo">Misty Cafe</Link>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>

        {/* Hamburger icon for mobile */}
        <div style={{ marginLeft: "auto", marginRight: "25px" }}>
          <a href="#" className="icon" onClick={() => {
            document.getElementById("mobile-menu").classList.toggle("active");
            }}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>

      {/* Sidebar for mobile navigation */}
      <div className="mobile-menu" id="mobile-menu">
        <span className="close-btn" onClick={closeSidebar}>×</span>
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <Link to="/menu" onClick={closeSidebar}>Menu</Link>
        <Link to="/contact" onClick={closeSidebar}>Contact</Link>
        <Link to="/about" onClick={closeSidebar}>About</Link>
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
    </>
  );
}

export default Contact;
