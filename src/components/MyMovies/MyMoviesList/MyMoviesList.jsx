import { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import styles from './MyMoviesList.module.css';
import EditMovie from '../EditMovie/EditMovie';
import icon from '../../../assets/sprite.svg';

import { updateMovieFavorite } from '../../../redux/movies/movies-operations';

const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_API_YOUTUBE = 'ba520957137ad46ba4502dabb5237445';

const MyMoviesList = ({ items, onDeleteMovie }) => {
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrailerUrl, setCurrentTrailerUrl] = useState('');

  const toggleFavorite = (id, favorite) => {
    dispatch(updateMovieFavorite({ id, favorite: !favorite }));
  };

  const playTrailer = (title) => {
    const encodedTitle = encodeURIComponent(title);
    const trailerUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodedTitle}&key=${VITE_API_YOUTUBE}`;
    console.log(trailerUrl);
    setCurrentTrailerUrl(trailerUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <button onClick={() => playTrailer(_id, title)}>
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
    <div>
      <ol className={styles.list}>{elements}</ol>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.close} onClick={closeModal}>
              ×
            </button>
            <iframe
              width="560"
              height="315"
              src={currentTrailerUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Trailer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMoviesList;
