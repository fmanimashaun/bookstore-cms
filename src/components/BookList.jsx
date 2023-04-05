import React from 'react';
import styles from 'assets/scss/booklist.module.scss';
import Book from './Book';

const Books = () => {
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'suzanne collins',
    },
  ];
  return (
    <section className={styles.booklist}>
      {books.map((book) => (
        <Book key={book.title} title={book.title} author={book.author} />
      ))}
    </section>
  );
};

export default Books;
