/* eslint-disable dot-notation */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from 'assets/scss/book.module.scss';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/bookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.book}>
      <div className={styles['book__details-wrapper']}>
        <div className={styles['book__details']}>
          <span className={styles['book__category']}>{book.category}</span>
          <h3 className={styles['book__title']}>{book.title}</h3>
          <p className={styles['book__author']}>{book.author}</p>
        </div>
        <div className={styles['book__actions']}>
          <button className={styles['book__btn']} type="button">
            Comments
          </button>
          <button
            className={styles['book__btn']}
            type="button"
            onClick={() => dispatch(removeBook(book.id))}
          >
            Remove
          </button>
          <button className={styles['book__btn']} type="button">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
