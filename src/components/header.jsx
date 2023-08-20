import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Group from '../assets/icons/Group.svg';

const Header = ({ isLoggedIn, userEmail, onLogout }) => {
  // Initialize isMenuOpen based on user login status
  const [isMenuOpen, setIsMenuOpen] = useState(!isLoggedIn);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav className={`nav ${isMenuOpen ? 'open' : 'close'}`}>
          <Link to="/">
            <img src={Group} className="nav__logo" alt="main-logo" />
          </Link>

          <div className={`nav__items ${isMenuOpen ? 'open' : 'close'}`}>
            <ul className={`nav__list ${isMenuOpen ? 'open' : 'close'}`}>
            <li className="nav__list--item">
            <Link to="/crm" className="nav__list--item-link" onClick={toggleMenu}>
              Admin panel
            </Link>
          </li>
              <li className="nav__list--item">
                <Link to="/course" className="nav__list--item-link" onClick={toggleMenu}>
                  Kurslar
                </Link>
              </li>
              <li className="nav__list--item">
                <Link to="/blog" className="nav__list--item-link" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
            </ul>

            {isLoggedIn ? (
              <div className={`nav__btn ${isMenuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
                {userEmail}
                <button className="logout-button" onClick={onLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/auth" className={`nav__btn ${isMenuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
                Kirish
              </Link>
            )}
          </div>

          <div className={`menu-icon ${isMenuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
