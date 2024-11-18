import { createSelector } from '@reduxjs/toolkit';

export const getMovies = ({ movies }) => movies.items;

// export const getFavoriteMovies = ({ movies }) => {
//   return movies.items.filter(({ favorite }) => favorite);
// };

export const getFavoriteMovies = createSelector([getMovies], (items) =>
  items.filter(({ favorite }) => favorite)
);
