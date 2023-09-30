import React, { useState } from 'react';
import styles from 'assets/scss/form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/bookSlice';

const Form = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      ...book,
    };
    dispatch(addBook(newBook));
    setBook({
      title: '',
      author: '',
      category: '',
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
      <div className={styles.addbook__wrapper}>
        <h2 className={styles.heading}>Add new book</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.title}
            type="text"
            name="title"
            placeholder="Book title"
            onChange={handleChange}
            value={book.title}
            required
          />
          <input
            className={styles.author}
            type="text"
            name="author"
            placeholder="Author"
            onChange={handleChange}
            value={book.author}
            required
          />
          <input
            className={styles.author}
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            value={book.category}
            required
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
