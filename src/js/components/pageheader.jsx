/* eslint-disable dot-notation */
import React from 'react';
import { PropTypes } from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from 'scss/header.module.scss';

const Pageheader = ({ navLinks }) => (
  <header className={styles.header}>
    <div className={styles['header__wrapper']}>
      <div className={styles['nav-wrapper']}>
        <span className={styles['logo']}>Bookstore CMS</span>
        <nav className={styles['navbar']}>
          <ul className={styles['navlinks']}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={styles['navlinks-item']}
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <button type="button" className={styles['profile']}>
        <FaUserAlt className={styles['profile-img']} />
      </button>
    </div>
  </header>
);

Pageheader.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Pageheader;
