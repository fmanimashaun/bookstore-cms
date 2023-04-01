/* eslint-disable dot-notation */
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import styles from 'scss/header.module.scss';

const Pageheader = () => (
  <header className={styles.header}>
    <div className={styles['nav-wrapper']}>
      <span className={styles['logo']}>Bookstore CMS</span>
      <nav className={styles['navbar']}>
        <ul className={styles['navlinks']}>
          <li className={styles['navlinks-item']}>Books</li>
          <li className={styles['navlinks-item']}>Categories</li>
        </ul>
      </nav>
    </div>
    <button type="button" className={styles['profile']}>
      <FaUserAlt className={styles['profile-img']} />
    </button>
  </header>
);

export default Pageheader;
