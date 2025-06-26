import React from 'react';
import '../css/Footer.scss';

const Footer = () => {
  return (
    <footer className="classic-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2><span className="emoji">🎞️</span> <span className="highlight">CLASSIC</span> CINEMA</h2>
          <p>
            Preserving the magic of cinema's golden age. Experience<br />
            timeless masterpieces lovingly restored for modern<br />
            audiences.
          </p>
          <p className="heart-note">Made with <span className="heart">❤️</span> for cinephiles worldwide</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li>Featured Movies</li>
              <li>Time Machine</li>
              <li>Classic Stars</li>
              <li>Directors</li>
              <li>Collections</li>
            </ul>
          </div>

          <div>
            <h4>Golden Eras</h4>
            <ul>
              <li>Silent Era (1920s)</li>
              <li>Golden Dawn (1930s)</li>
              <li>War & Drama (1940s)</li>
              <li>Technicolor (1950s)</li>
              <li>New Wave (1960s)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-stats">
        <div><span>500+</span><br />Classic Films</div>
        <div><span>60+</span><br />Years of Cinema</div>
        <div><span>100+</span><br />Legendary Stars</div>
        <div><span>4K</span><br />Restored Quality</div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Classic Cinema. Preserving film heritage since the digital age.</p>
        <div className="footer-policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
