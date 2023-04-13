/* eslint-disable dot-notation */
import React, { useState } from 'react';
import styles from 'assets/scss/form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from 'redux/books/bookSlice';

const Form = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.bookList);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: bookList.length + 1,
      category: 'Action',
      ...book,
    };
    dispatch(addBook(newBook));
    setBook({
      title: '',
      author: '',
    });
  };

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className={styles.addbook}>
      <div className={styles['addbook__wrapper']}>
        <h2 className={styles.heading}>Add new book</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.title}
            type="text"
            name="title"
            placeholder="Book title"
            onChange={handleChange}
            value={book.title}
          />
          <input
            className={styles.author}
            type="text"
            name="author"
            placeholder="Author"
            onChange={handleChange}
            value={book.author}
          />
          <input
            className={styles['sumbit-btn']}
            type="submit"
            value="Add book"
          />
        </form>
      </div>
    </section>
  );
};

export default Form;
