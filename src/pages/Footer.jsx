import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Footer.scss';

const Footer = () => {
  const location = useLocation();

  const navItems = [
    {label: 'Home' ,path: '/dashboard'},
    { label: 'Featured Movies', path: '/allmovies' },
    { label: 'Time Machine', path: '/decades' },
    { label: 'Directors', path: '/directors' },
    { label: 'Collections', path: '/mylist' },
  ];

  const eraItems = [
    { label: 'Silent Era' },
    { label: 'Golden Dawn' },
    { label: 'War and Drama' },
    { label: 'Technicolor' },
    { label: 'New Wave' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="classic-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>
            <span className="emoji">🎞️</span>{" "}
            <span className="highlight">CLASSIC</span> CINEMA
          </h2>
          <p>
            Preserving the magic of cinema's golden age. Experience<br />
            timeless masterpieces lovingly restored for modern<br />
            audiences.
          </p>
          <p className="heart-note">
            Made with <span className="heart">❤️</span> for cinephiles worldwide
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              {navItems.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={isActive(path) ? 'active-link' : ''}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Golden Eras</h4>
            <ul>
              {eraItems.map(({ label }) => {
                const path = `/genre/${encodeURIComponent(label)}`;
                return (
                  <li key={label}>
                    <Link
                      to={path}
                      className={isActive(path) ? 'active-link' : ''}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-stats">
        <div>
          <span>500+</span>
          <br />Classic Films
        </div>
        <div>
          <span>60+</span>
          <br />Years of Cinema
        </div>
        <div>
          <span>100+</span>
          <br />Legendary Stars
        </div>
        <div>
          <span>4K</span>
          <br />Restored Quality
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Classic Cinema. Preserving film heritage since the digital age.</p>
        <div className="footer-policy">
          <Link>Privacy Policy</Link>
           <Link>Terms of Service</Link>
           <Link>Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
