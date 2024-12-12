import { useRef } from 'react';
import styles from './MyMoviesList.module.css';

const VITE_API_URL = import.meta.env.VITE_API_URL;

const MyMoviesList = ({ items, onDeleteMovie }) => {
  const imageRef = useRef(null);

  const elements = items.map(
    ({ _id, title, director, genre, poster, releaseDate }) => (
      <li className={styles.listItem} key={_id}>
        {poster && (
          <div className={styles.posterWrapper}>
            <img
              ref={imageRef}
              className={styles.listItemPoster}
              src={`${VITE_API_URL}/${poster}`}
              alt={`Poster for ${title}`}
            />
          </div>
        )}
        <div className={styles.listItemInfo}>
          <h2>Назва: {title}</h2>
          <span>Director: {director}</span>
          <span>Genre: {genre}</span>
          <span>Release: {releaseDate}</span>
        </div>
        <button className={styles.button} onClick={() => onDeleteMovie(_id)}>
          Delete
        </button>
        <button className={styles.btnEdit}>Edit</button>
      </li>
    )
  );

  return <ol className={styles.list}>{elements}</ol>;
};

export default MyMoviesList;
