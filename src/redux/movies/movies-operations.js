import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/movies';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllMovies();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue({
        status: response?.status,
        message: response?.data?.message || 'Failed to fetch movies',
      });
    }
  }
);

export const addMovie = createAsyncThunk(
  'movies/addMovie',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addMovie(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue({
        status: response?.status,
        message: response?.data?.message || 'Failed to add movie',
      });
    }
  }
);

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteMovie(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue({
        status: response?.status,
        message: response?.data?.message || 'Failed to delete movie',
      });
    }
  }
);

export const updateMovie = createAsyncThunk(
  'movies/updateMovie',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const { data: updatedMovie } = await api.updateMovieById(id, data);
      return updatedMovie;
    } catch ({ response }) {
      return rejectWithValue({
        status: response?.status,
        message: response?.data?.message || 'Failed to update movie',
      });
    }
  }
);

export const updateMovieFavorite = createAsyncThunk(
  'movies/updateFavorite',
  async ({ id, favorite }, { rejectWithValue }) => {
    try {
      const response = await api.updateMovieFavoriteById(id, { favorite });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
