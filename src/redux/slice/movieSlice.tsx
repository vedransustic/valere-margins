import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { getDataFromRequests, requests } from '../../api/requests';
import { apiDataType } from '../../types';
import { addMoviesToList, formatResponse } from '../util/movieUtil';

export const fetchAsyncMovies: any = createAsyncThunk(
	'movies/fetchAsyncMovies',
	async () => {
		const response: any = await getDataFromRequests(requests).catch(
			(err) => {
				throw new Error(err);
			}
		);
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

const initialState = {
	loading: false,
	movies: [],
	error: null,
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
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
		[fetchAsyncMovies.pending.toString()]: (state) => {
			return { ...state, loading: true };
		},
		[fetchAsyncMovies.fulfilled.toString()]: (state, { payload }) => {
			return { ...state, movies: payload, loading: false };
		},
		[fetchAsyncMovies.rejected.toString()]: (state, { payload }) => {
			return { ...state, loading: false, error: payload };
		},
	},
});

export const { toggleFavorites } = movieSlice.actions;
export const getAllMovies = (state: {
	loading: boolean;
	movies: Array<apiDataType>;
	error: any;
}) => state;
export default movieSlice.reducer;
