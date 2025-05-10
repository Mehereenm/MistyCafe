import "../style.css";

function Footer() {
  return (
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
  );
}

export default Footer;
