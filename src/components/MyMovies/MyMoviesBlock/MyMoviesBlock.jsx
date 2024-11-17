import styles from './MyMoviesBlock.module.css';

const MyBooksBlock = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      {children}
    </div>
  );
};

export default MyBooksBlock;
