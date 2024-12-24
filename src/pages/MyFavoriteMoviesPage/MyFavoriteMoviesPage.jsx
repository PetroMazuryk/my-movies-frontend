import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFavoriteMovies } from '../../redux/movies/movies-selectors';
import { deleteMovie } from '../../redux/movies/movies-operations';
import EditMovie from '../../components/MyMovies/EditMovie/EditMovie';
import MyBooksBlock from '../../components/MyMovies/MyMoviesBlock/MyMoviesBlock';
import { updateMovieFavorite } from '../../redux/movies/movies-operations';

import TrailerModal from '../../components/TrailerModal/TrailerModal.jsx';
import { useTrailer } from '../../hooks/useTrailer.js';
import TitleText from '../../components/TitleText/TitleText';
import icon from '../../assets/sprite.svg';

import styles from './MyFavoriteMoviesPage.module.css';

const VITE_API_URL = import.meta.env.VITE_API_URL;

const MyFavoriteMoviesPage = () => {
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  const favoriteMovies = useSelector(getFavoriteMovies);
  const {
    isModalOpen,
    currentTrailerUrl,
    errorMessage,
    playTrailer,
    closeModal,
  } = useTrailer();

  const toggleFavorite = (id, favorite) => {
    dispatch(updateMovieFavorite({ id, favorite: !favorite }));
  };

  const onDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  const elements = favoriteMovies.map(
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
        <button onClick={() => playTrailer(title)}>
          <svg className={styles.video}>
            <use href={`${icon}#icon-video`}></use>
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

  return (
    <MyBooksBlock title="My favorite movies page">
      {favoriteMovies.length > 0 ? (
        <>
          <ol className={styles.list}>{elements}</ol>
          <TrailerModal
            isOpen={isModalOpen}
            trailerUrl={currentTrailerUrl}
            errorMessage={errorMessage}
            onClose={closeModal}
          />
        </>
      ) : (
        <TitleText>No favorite movies have been added yet</TitleText>
      )}
    </MyBooksBlock>
  );
};

export default MyFavoriteMoviesPage;
