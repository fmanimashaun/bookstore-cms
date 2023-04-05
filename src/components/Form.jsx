/* eslint-disable dot-notation */
import React from 'react';
import styles from 'assets/scss/form.module.scss';

const Form = () => (
  <section className={styles.addbook}>
    <div className={styles['addbook__wrapper']}>
      <h2 className={styles.heading}>Add new book</h2>
      <form className={styles.form}>
        <input className={styles.title} type="text" placeholder="Book title" />
        <input className={styles.author} type="text" placeholder="Author" />
        <input
          className={styles['sumbit-btn']}
          type="submit"
          value="Add book"
        />
      </form>
    </div>
  </section>
);

export default Form;
