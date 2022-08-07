import { createSlice } from '@reduxjs/toolkit';
import { stateType } from '../../types';
import { addMoviesToList } from '../util/movieUtil';

const initialState = {
	movies: [],
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovies: (state: stateType, { payload }: any) => {
			state.movies = addMoviesToList(payload);
		},
	},
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: { movies: { movies: any } }) =>
	state.movies.movies;
export default movieSlice.reducer;
