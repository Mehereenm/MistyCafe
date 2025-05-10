import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="navbar" id="topnav">
        <Link to="/" className="logo">Misty Cafe</Link>
        <Link to="/" className="active">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>

        <div id="cart-icon" style={{ position: "fixed", fontSize: "30px", top: "25px", right: "20px" }}>
          <div style={{ position: "relative" }}>
            <i className="ri-shopping-bag-2-line"></i>
            <span id="cart-count" className="cart-count">0</span>
          </div>
        </div>

        <a href="#" className="icon" onClick={() => {
          document.getElementById("topnav").classList.toggle("responsive");
        }}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

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
