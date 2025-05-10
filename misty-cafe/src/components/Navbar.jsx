import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  const toggleMenu = () => {
    const nav = document.getElementById("topnav");
    nav.classList.toggle("responsive");
  };

  return (
    <div className="navbar" id="topnav">
      <Link to="/" className="logo">Misty Cafe</Link>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <div id="cart-icon" style={{ position: "fixed", fontSize: "30px", top: "25px", right: "20px" }}>
        <div style={{ position: "relative" }}>
          <i className="ri-shopping-bag-2-line"></i>
          <span id="cart-count" className="cart-count">0</span>
        </div>
      </div>
      <a href="#" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
