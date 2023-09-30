import React, { useEffect } from 'react';
import styles from 'assets/scss/booklist.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from 'redux/books/bookSlice';
import Book from './Book';

const Books = () => {
  const bookList = useSelector((state) => state.books.bookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <section className={styles.booklist}>
      {bookList.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </section>
  );
};

export default Books;
