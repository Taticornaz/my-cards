
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'; // импорт стилей как модуля

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link to="/" className={styles.navbar__logoLink}>
          <img
            src="https://images.pexels.com/photos/5531004/pexels-photo-5531004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Logo"
            className={styles.navbar__logoImage}
            width={100}
          />
        </Link>
      </div>
      <ul className={styles.navbar__links}>
        <li className={styles.navbar__item}>
          <Link to="/" className={styles.navbar__link}>Главная</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/cards" className={styles.navbar__link}>Страница с карточками</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/carousel" className={styles.navbar__link}>Карусель</Link>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;
