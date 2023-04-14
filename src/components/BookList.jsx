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
      {Object.entries(bookList)
        .map(([key, value]) => ({ ...value[0], id: key }))
        .map((book) => (
          <Book key={book.id} book={book} />
        ))}
    </section>
  );
};

export default Books;
