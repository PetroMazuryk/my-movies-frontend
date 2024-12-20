import instance from './auth';
import axios from 'axios';
const VITE_API_YOUTUBE = 'ba520957137ad46ba4502dabb5237445';

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

export const fetchTrailer = async (title) => {
  const query = `${title} official trailer`;
  const encodedQuery = encodeURIComponent(query);

  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodedQuery}&key=${VITE_API_YOUTUBE}`
  );

  if (response.data.items.length > 0) {
    const videoId = response.data.items[0].id.videoId;
    return `https://www.youtube.com/watch?v=${videoId}`;
  }

  throw new Error('Trailer not found');
};
