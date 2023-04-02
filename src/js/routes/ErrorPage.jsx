import React from 'react';
import styles from 'scss/error-page.module.scss';

const ErrorPage = () => (
  <div className={styles['error-page']}>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
  </div>
);

export default ErrorPage;
