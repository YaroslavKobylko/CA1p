import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const navLinks = ['Our Story', 'Blog', 'Contact', 'Pricing', 'Log in', 'Try for free'];

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src="/icons/HeaderSVG/HeaderSVG.svg" alt="HeaderLogo" width={112} height={28}/>
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.ulclass}>
            {navLinks.map((link, index) => (
              <li key={index} className={styles[`frame${index + 2}`]}>
                <div className={styles.rectangle}></div>
                <a href={`#${link.toLowerCase().replace(' ', '-')}`} className={styles.navLink}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;