import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyMoviesBlock from './MyMoviesBlock/MyMoviesBlock';
import MyMoviesList from './MyMoviesList/MyMoviesList';

import { fetchMovies, deleteMovie } from '../../redux/movies/movies-operations';
import { getMovies } from '../../redux/movies/movies-selectors';

import styles from './MyMovies.module.css';

const MyMovies = () => {
  const movies = useSelector(getMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const onDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.blocks}>
        <MyMoviesBlock title="Movie list">
          <MyMoviesList items={movies} onDeleteMovie={onDeleteMovie} />
        </MyMoviesBlock>
      </div>
    </div>
  );
};

export default MyMovies;
