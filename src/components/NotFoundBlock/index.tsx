import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>ERROR 404</h1>
      <div className={styles.description}>This is not the web page you are looking for.</div>
    </div>
  );
};

export default NotFoundBlock;
