/* eslint-disable dot-notation */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from 'assets/scss/book.module.scss';

const Book = ({ title, author }) => (
  <div className={styles.book}>
    <div className={styles['book__details-wrapper']}>
      <div className={styles['book__details']}>
        <span className={styles['book__category']}>category</span>
        <h3 className={styles['book__title']}>{title}</h3>
        <p className={styles['book__author']}>{author}</p>
      </div>
      <div className={styles['book__actions']}>
        <button className={styles['book__btn']} type="button">
          Comments
        </button>
        <button className={styles['book__btn']} type="button">
          Remove
        </button>
        <button className={styles['book__btn']} type="button">
          Edit
        </button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
