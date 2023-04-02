import React from 'react';
import styles from 'scss/booklist.module.scss';
import Book from './Book';

const Books = () => {
  const books = [
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
    },
    {
      title: 'Ensayo sobre la ceguera',
      author: 'José Saramago',
    },
    {
      title: 'Dracula',
      author: 'Bram Stocker',
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
