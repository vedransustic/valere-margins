import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { getDataFromRequests, requests } from '../../api/requests';
import { addMoviesToList, formatResponse } from '../util/movieUtil';

export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies',
	async () => {
		const response = await getDataFromRequests(requests);
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
			.catch((err) => console.error(err));
	}
);

const initialState = {
	movies: [],
	selectedMovie: {},
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		removeMovieDetail: (state) => {
			state.selectedMovie = {};
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
		[fetchAsyncMovies.rejected.toString()]: (state, payload) => {
			console.log('Fetched Faild');
		},
		[fetchAsyncMovieDetail.fulfilled.toString()]: (state, { payload }) => {
			return { ...state, selectedMovie: payload };
		},
	},
});

export const { removeMovieDetail } = movieSlice.actions;
export const getAllMovies = (state: { movies: any }) => state.movies;
export const getSelectedMovie = (state: { selectedMovie: any }) =>
	state.selectedMovie;
export default movieSlice.reducer;
