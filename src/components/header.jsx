import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Group from '../assets/icons/Group.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav className={`nav ${isMenuOpen ? 'open' : 'close'}`}>
          <a href="#">
            <img src={Group} className="nav__logo" alt="main-logo" />
          </a>

          <div className={`nav__items ${isMenuOpen ? 'open' : 'close'}`}>
            <ul className={`nav__list ${isMenuOpen ? 'open' : 'close'}`}>
              <li className="nav__list--item">
                <a href="#" className="nav__list--item-link" onClick={closeMenu}>
                  Kurlar
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#" className="nav__list--item-link" onClick={closeMenu}>
                  Blog
                </a>
              </li>
            </ul>

            <button className={`nav__btn ${isMenuOpen ? 'open' : 'close'}`} onClick={closeMenu}>
              Kirish
            </button>
          </div>

          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
