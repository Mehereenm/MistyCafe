import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar" id="topnav">
        <Link to="/" className="logo">Misty Cafe</Link>
        <Link to="/">Home</Link>
        <Link to="/menu" className="active">Menu</Link>
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

      {/* Cart Sidebar */}
      <div className="cart">
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-content"></div>
        <div className="total">
          <div className="total-title">Total</div>
          <div className="total-price">$0</div>
        </div>
        <button className="btn-buy">Buy Now</button>
        <i className="ri-close-line" id="cart-close"></i>
      </div>

      {/* Menu */}
      <div className="menu-container">
        <h1>Our Cozy Menu</h1>
        <div className="menu-grid">
          {[
            { name: "Creamy Broccoli Soup", price: "$11.99", desc: "A rich and creamy soup with tender broccoli and melted cheese...", img: "/img/Soup_.png" },
            { name: "Morning Mist Waffles", price: "$14.99", desc: "Fluffy golden waffles topped with blueberry compote...", img: "/img/Waffles.png" },
            { name: "Hedgehog Crepe Cake", price: "$16.49", desc: "Layers of soft crepes with hazelnut cream and cocoa...", img: "/img/Hedgehog Crepe Cake.png" },
            { name: "Ember Glow Ziti", price: "$12.99", desc: "Baked pasta with marinara, mozzarella, and ricotta...", img: "/img/Baked Ziti.png" },
            { name: "Stormy Skillet Chicken", price: "$14.99", desc: "Crispy rosemary oven-fried chicken...", img: "/img/Oven Crisp.png" },
            { name: "Blushing Dawn Crepe", price: "$9.49", desc: "Crepe filled with strawberries and vanilla cream...", img: "/img/Crepe.png" },
            { name: "Cloud-Kissed French Toast", price: "$11.49", desc: "Brioche stuffed with cream cheese and powdered sugar...", img: "/img/French Toast.png" },
            { name: "Stormy Night Stew", price: "$12.99", desc: "Slow-simmered beef and vegetables...", img: "/img/soup.png" },
            { name: "Cloudy Cocoa", price: "$5.99", desc: "Rich hot chocolate with vanilla whipped cream...", img: "/img/coco.png" },
          ].map((item, i) => (
            <div className="menu-card" key={i}>
              <img src={item.img} alt={item.name} />
              <h2 className="prodname">{item.name}</h2>
              <p>{item.desc}</p>
              <div className="price-cart">
                <span className="price">{item.price}</span>
                <i className="ri-shopping-bag-2-line add-cart"></i>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br/>
        <p className="warm-message">Experience the taste of comfort in every bite!</p>
      </div>

    </>
  );
}

export default Menu;
