import React from 'react';
import styles from 'assets/scss/booklist.module.scss';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const bookList = useSelector((state) => state.books.bookList);

  return (
    <section className={styles.booklist}>
      {bookList.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </section>
  );
};

export default Books;
