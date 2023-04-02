import { useRouteError } from 'react-router-dom';
import styles from 'scss/error-page.module.scss';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className={styles['error-page']}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
