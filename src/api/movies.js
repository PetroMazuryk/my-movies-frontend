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
