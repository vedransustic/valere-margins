import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { getDataFromRequests, requests } from '../../api/requests';
import { apiDataType } from '../../types';
import { addMoviesToList, formatResponse } from '../util/movieUtil';
import { WritableDraft } from 'immer/dist/internal';

export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies',
	async () => {
		const response = await getDataFromRequests(requests).catch((err) => {
			throw new Error(err);
		});
		return addMoviesToList(response);
	}
);

export const fetchAsyncMovieDetail = createAsyncThunk(
	'movies/fetchAsyncMovieDetail',
	async (id) => {
		return await axios
			.get(
				`/movie/${id}?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US`
			)
			.then((response) => formatResponse(response.data))
			.catch((err) => {
				throw new Error(err);
			});
	}
);

export const saveToLocalStorage = (
	state: WritableDraft<{ movies: Array<apiDataType> }>
): void => {
	try {
		const serialisedState = JSON.stringify(state.movies);
		localStorage.setItem('persistantState', serialisedState);
	} catch (err) {
		console.error(err);
	}
};

const initialState = {
	movies: [],
	selectedMovie: {},
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addToLocalStorage: (state) => {
			saveToLocalStorage(state);
		},
		removeMovieDetail: (state) => {
			state.selectedMovie = {};
		},
		toggleFavorites: (state: any, action) => {
			const movieId: number = state.movies.findIndex(
				(movie: { id: number }) => movie.id === action.payload
			);

			if (movieId >= 0) {
				state.movies[movieId].favorite =
					!state.movies[movieId].favorite;
			}
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending.toString()]: () => {
			console.log('Pending');
		},
		[fetchAsyncMovies.fulfilled.toString()]: (state, { payload }) => {
			console.log('Fetched Succesfully');
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected.toString()]: () => {
			console.error('Fetched Faild');
		},
		[fetchAsyncMovieDetail.fulfilled.toString()]: (state, { payload }) => {
			return { ...state, selectedMovie: payload };
		},
	},
});

export const { removeMovieDetail, toggleFavorites, addToLocalStorage } =
	movieSlice.actions;
export const getAllMovies = (state: { movies: Array<apiDataType> }) =>
	state.movies;
export const getSelectedMovie = (state: { selectedMovie: apiDataType }) =>
	state.selectedMovie;
export default movieSlice.reducer;
