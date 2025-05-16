import React from "react";
import { Link } from "react-router-dom";

function About() {
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

      {/* About Content */}
      <div className="about-container">
        <h2 className="abtitle">Misty Skies Restaurant: A Cozy Escape on Rainy Days</h2>

        <p>
          Tucked away on a quiet corner of Maple Street, Misty Skies Restaurant was born from a simple idea: to turn rainy days into something to savor.
          Founded by siblings Clara and James Whitmore, Misty Skies was inspired by their childhood spent watching raindrops race down their grandmother’s kitchen window while she made them the coziest, heartwarming meals.
        </p>
        <p>
          Every dish at Misty Skies is designed to bring warmth and comfort, whether it’s their famous Golden Harvest Soup, a rich blend of butternut squash and roasted apples, or the Stormy Night Stew, a slow-simmered beef and vegetable medley that fills the air with a savory aroma. Their signature drink, Cloudy Cocoa, is a velvety hot chocolate topped with homemade vanilla whipped cream, perfect for sipping as the rain patters outside.
        </p>
        <p>
          The restaurant itself is a haven from the storm, with dimly lit lanterns, soft jazz playing in the background, and oversized armchairs that invite guests to linger a little longer. A row of window seats offers the best view of the rain, with cozy blankets available for anyone who wants to curl up with a book and a warm cup of tea.
        </p>
        <p>
          For Clara and James, Misty Skies is more than just a restaurant—it’s a place where people can find comfort in the simplest of things: good food, warm company, and the soothing sound of rain.
        </p>
      </div>

      <img className="about-im" src="/img/rest2.png" alt="Cozy dining" />
    </>
  );
}

export default About;
