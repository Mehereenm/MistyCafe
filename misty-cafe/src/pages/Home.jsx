import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // Toggle sidebar open/close
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

      {/* Banner Slider */}
      <div className="banner-slider">
        {[
          {
            img: "/img/rest.png",
            title: "Misty Skies Restaurant",
            text: "Experience the taste of comfort in every bite!",
          },
          {
            img: "/img/Oven Crisp.png",
            title: "Stormy Skillet Chicken",
            text: "Warm your body and taste buds! Explore more of our menu!",
          },
          {
            img: "/img/Hedgehog Crepe Cake.png",
            title: "Hedgehog delight!",
            text: "Food that appeals to all of your senses, not just taste!",
          },
          {
            img: "/img/French Toast.png",
            title: "Cloud-Kissed French Toast",
            text: "A fluffy strawberry cloud filled with cream cheese, Mmmm",
          },
          {
            img: "/img/food.png",
            title: "Warm Sweet & Delicious",
            text: "A great way to warm up and relax, explore more of our menu!",
          },
          {
            img: "/img/Waffles.png",
            title: "Blueberry Delight!",
            text: "Try one of our popular items!",
          },
        ].map((slide, i) => (
          <div className="slide" key={i}>
            <img src={slide.img} alt={slide.title} />
            <div className="slide-text">
              <h1 className="slide-title">{slide.title}</h1>
              <p>{slide.text}</p>
              <Link to="/menu" className="button">Explore Menu</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
