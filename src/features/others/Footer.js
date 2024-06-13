import React from 'react';
import Styles from './Other.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerText}>
        Copyright{' '}
        <i>
          <FontAwesomeIcon icon={faCopyright} style={{ color: '#ff8000' }} />
        </i>{' '}
        Dapp Architects 2024
      </div>
    </footer>
  );
}

export default Footer;
