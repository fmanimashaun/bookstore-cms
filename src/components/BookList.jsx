import React from 'react';
import styles from 'assets/scss/booklist.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/bookSlice';
import Book from './Book';

const Books = () => {
  const { bookList } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <section className={styles.booklist}>
      {bookList.map((book) => (
        <Book
          key={book.item_id}
          book={book}
          handleRemoveBook={handleRemoveBook}
        />
      ))}
    </section>
  );
};

export default Books;
