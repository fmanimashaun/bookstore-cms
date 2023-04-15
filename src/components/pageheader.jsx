import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from 'assets/scss/header.module.scss';

const Pageheader = () => {
  const navLinks = [
    { to: '/', label: 'Books' },
    { to: '/categories', label: 'Categories' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.nav__wrapper}>
          <span className={styles.logo}>Bookstore CMS</span>
          <nav className={styles.navbar}>
            <ul className={styles.navlinks}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={styles.navlinks__item}
                >
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
        <button type="button" className={styles.profile}>
          <FaUserAlt className={styles.profile__img} />
        </button>
      </div>
    </header>
  );
};

export default Pageheader;
