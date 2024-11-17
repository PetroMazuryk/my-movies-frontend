import { useRef } from 'react';
import styles from './MyMoviesList.module.css';

const VITE_API_URL = import.meta.env.VITE_API_URL;

const MyMoviesList = ({ items, onDeleteMovie }) => {
  const imageRef = useRef(null);

  const elements = items.map(({ _id, title, director, genre, poster }) => (
    <li className={styles.listItem} key={_id}>
      {poster && (
        <img
          ref={imageRef}
          className={styles.listItemPoster}
          src={`${VITE_API_URL}/${poster}`}
          alt={`Poster for ${title}`}
        />
      )}
      Title: {title}. Director: {director}. Genre: {genre}
      <button onClick={() => onDeleteMovie(_id)}>Delete</button>
    </li>
  ));

  return <ol className={styles.list}>{elements}</ol>;
};

export default MyMoviesList;
