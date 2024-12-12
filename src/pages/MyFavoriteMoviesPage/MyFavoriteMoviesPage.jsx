import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFavoriteMovies } from '../../redux/movies/movies-selectors';
import { deleteMovie } from '../../redux/movies/movies-operations';

const VITE_API_URL = import.meta.env.VITE_API_URL;
import styles from './MyFavoriteMoviesPage.module.css';
import MyBooksBlock from '../../components/MyMovies/MyMoviesBlock/MyMoviesBlock';

const MyFavoriteMoviesPage = () => {
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  const favoriteMovies = useSelector(getFavoriteMovies);

  const onDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  const elements = favoriteMovies.map(
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

  return (
    <MyBooksBlock title="My favorite movies page">
      <ol className={styles.list}>{elements}</ol>
    </MyBooksBlock>
  );
};

export default MyFavoriteMoviesPage;
