import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './MyMoviesList.module.css';
import EditMovie from '../EditMovie/EditMovie';
import icon from '../../../assets/sprite.svg';

import { updateMovieFavorite } from '../../../redux/movies/movies-operations';

const VITE_API_URL = import.meta.env.VITE_API_URL;

const MyMoviesList = ({ items, onDeleteMovie }) => {
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  const toggleFavorite = (id, favorite) => {
    dispatch(updateMovieFavorite({ id, favorite: !favorite }));
  };

  const elements = items.map(
    ({ _id, title, director, genre, poster, releaseDate, favorite }) => (
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
        <button>
          <svg
            onClick={() => toggleFavorite(_id, favorite)}
            className={`${styles.like} ${favorite ? styles.likeActive : ''}`}
          >
            <use href={`${icon}#icon-heart`}></use>
          </svg>
        </button>
        <button className={styles.button} onClick={() => onDeleteMovie(_id)}>
          Delete
        </button>

        <EditMovie
          movie={{
            _id,
            title,
            director,
            genre,
            poster,
            releaseDate,
            favorite,
          }}
          className={styles.btnEdit}
        />
      </li>
    )
  );

  return <ol className={styles.list}>{elements}</ol>;
};

export default MyMoviesList;
