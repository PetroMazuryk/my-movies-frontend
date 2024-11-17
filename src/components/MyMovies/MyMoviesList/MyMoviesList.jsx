import styles from './MyMoviesList.module.css';

const { VITE_API_URL } = import.meta.env.VITE_API_URL;

const MyBooksList = ({ items, onDeleteMovie }) => {
  const elements = items.map(({ _id, title, director, poster }) => (
    <li className={styles.listItem} key={_id}>
      {poster && (
        <img
          className={styles.listItemPoster}
          src={`${VITE_API_URL}/${poster}`}
        />
      )}
      Title: {title}. Director: {director}.{' '}
      <button onClick={() => onDeleteMovie(_id)}>Delete</button>
    </li>
  ));

  return <ol className={styles.list}>{elements}</ol>;
};

export default MyBooksList;
