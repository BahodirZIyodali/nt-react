import React from 'react';
import Moon from '../assets/icons/Moon.svg'
import Group from '../assets/icons/Group.svg'
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <a href="#">
            <img src={Group} className="nav__logo" alt="main-logo" />
          </a>

          <div className="nav__items">
            <ul className="nav__list">
              <li className="nav__list--item">
                <a href="#" className="nav__list--item-link">
                  Kurlar
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#" className="nav__list--item-link">
                  Blog
                </a>
              </li>
            </ul>

            <button className="nav__btn">Kirish</button>

            <img src={Moon} alt="dark_mode and light_mode" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
