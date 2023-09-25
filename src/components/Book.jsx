<<<<<<< HEAD
import React from 'react';
import { PropTypes } from 'prop-types';
import Styles from 'assets/scss/book.module.scss';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/bookSlice';
import ProgressBar from './ProgressBar';
import ProgressDetails from './ProgressDetails';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className={Styles.book}>
      <div className={Styles.book__details}>
        <div className={Styles.book__info}>
          <span className={Styles.book__category}>{book.category}</span>
          <h3 className={Styles.book__title}>{book.title}</h3>
          <p className={Styles.book__author}>{book.author}</p>
          <div className={Styles.book__actions}>
            <button className={Styles.book__btn} type="button">
              Comments
            </button>
            <button
              className={Styles.book__btn}
              type="button"
              onClick={() => dispatch(removeBook(book.item_id))}
            >
              Remove
            </button>
            <button className={Styles.book__btn} type="button">
              Edit
            </button>
          </div>
        </div>
        <div className={Styles.book__status}>
          <div className={Styles.book__stats}>
            <ProgressBar progressPercentage={64} />
          </div>
          <div className={Styles.book__progress}>
            <ProgressDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
=======
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
>>>>>>> 266c089f19f4621e96b2306982db5e8493525d3f
};

export default Book;
