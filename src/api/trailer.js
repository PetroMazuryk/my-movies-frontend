import axios from 'axios';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const getMovieByName = async (query) => {
  try {
    const response = await axios.get(
      `${VITE_BASE_URL}/search/movie?api_key=${VITE_API_KEY}&query=${encodeURIComponent(
        query
      )}&page=1`
    );
    if (response.data.results.length === 0) {
      throw new Error('No movies found for the provided query');
    }
    return response.data.results[0];
  } catch (error) {
    console.error('Error fetching movie by name:', error);
    throw error;
  }
};

export const getMovieTrailerById = async (movieId) => {
  try {
    const response = await axios.get(
      `${VITE_BASE_URL}/movie/${movieId}/videos?api_key=${VITE_API_KEY}`
    );
    const trailers = response.data.results.filter(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );

    if (trailers.length > 0) {
      return trailers[0];
    } else {
      throw new Error('Trailer not found');
    }
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    throw error;
  }
};

export const findAndPlayTrailer = async (query) => {
  try {
    const movie = await getMovieByName(query);
    console.log(`Found movie: ${movie.title} (ID: ${movie.id})`);

    const trailer = await getMovieTrailerById(movie.id);
    console.log(`Found trailer: ${trailer.name} (Key: ${trailer.key})`);

    return `https://www.youtube.com/embed/${trailer.key}`;
  } catch (error) {
    console.error('Error finding and playing trailer:', error);
    throw error;
  }
};
