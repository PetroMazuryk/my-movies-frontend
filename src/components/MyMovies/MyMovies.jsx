import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyMoviesBlock from './MyMoviesBlock/MyMoviesBlock';
import MyMoviesList from './MyMoviesList/MyMoviesList';
import MyMoviesForm from './MyMoviesForm/MyMoviesForm';

import {
  fetchMovies,
  addMovie,
  deleteMovie,
} from '../../redux/movies/movies-operations';
import { getMovies } from '../../redux/movies/movies-selectors';

import styles from './MyMovies.module.css';
import TitleText from '../TitleText/TitleText';

const MyMovies = () => {
  const movies = useSelector(getMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const onAddMovie = (data) => {
    dispatch(addMovie(data));
  };

  const onDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <div>
      <div className={styles.blocks}>
        <MyMoviesBlock title="Add movie">
          <MyMoviesForm onSubmit={onAddMovie} />
        </MyMoviesBlock>

        <MyMoviesBlock title="Movie list">
          {movies.length > 0 ? (
            <MyMoviesList items={movies} onDeleteMovie={onDeleteMovie} />
          ) : (
            <TitleText>No movies have been added yet</TitleText>
          )}
        </MyMoviesBlock>
      </div>
    </div>
  );
};

export default MyMovies;
