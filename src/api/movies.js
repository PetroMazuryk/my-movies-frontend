import instance from './auth';

export const getAllMovies = () => instance.get('/api/movies');

export const deleteMovie = (id) => {
  return instance.delete(`/api/movies/${id}`);
};

export const addMovie = (data) => {
  return instance.post('/api/movies', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateMovieById = (id, data) => {
  return instance.put(`/api/movies/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateMovieFavoriteById = (id, data) => {
  return instance.patch(`/api/movies/${id}/favorite`, data);
};
