/* eslint-disable dot-notation */
import React, { useState } from 'react';
import styles from 'assets/scss/categories.module.scss';

const Categories = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prevState) => !prevState);
    setTimeout(() => {
      setShow(() => false);
    }, 3000);
  };

  return (
    <section className={styles.categories}>
      {show ? <p>The project is in progress...</p> : ''}
      <button
        className={styles['categories__btn']}
        type="button"
        onClick={handleClick}
      >
        Check for status
      </button>
    </section>
  );
};

export default Categories;
