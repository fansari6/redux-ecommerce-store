import React from 'react';
import Styles from './Other.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/dapp-architects-website-logo.png';

function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.divImg}>
        <img src={logo} className={Styles.headerImg} alt="Dapp Architects" />
        <h1>Redux Ecommerce Store</h1>
      </div>
      <nav className={Styles.nav}>
        <ul className={Styles.navUL}>
          <li className={Styles.navLI}>
            <Link to="/" className={Styles.navLink}>
              Home
            </Link>
          </li>
          <li className={Styles.navLI}>
            <Link to="/cart" className={Styles.navLink}>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
