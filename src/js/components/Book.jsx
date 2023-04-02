/* eslint-disable dot-notation */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from 'scss/book.module.scss';

const Book = ({ title, author }) => (
  <div className={styles.book}>
    <h3 className={styles['book__title']}>{title}</h3>
    <p className={styles['book__author']}>{author}</p>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
