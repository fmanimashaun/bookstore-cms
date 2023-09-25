<<<<<<< HEAD
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
=======
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
>>>>>>> 266c089f19f4621e96b2306982db5e8493525d3f
      ))}
    </section>
  );
};

export default Books;
