import { PayloadAction } from '@reduxjs/toolkit';
import {
	ADD_MOVIE_DATA,
	ADD_MOVIE_TO_FAVORITES,
	REMOVE_MOVIE_FROM_FAVORITES,
} from '../../constants/redux';
import { removeFavoriteMovie } from '../util/movieUtil';

const initialState = {
	movieList: {},
	favoriteMovies: [],
};

const movieReducer = (state = initialState, action: PayloadAction<any>) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_MOVIE_DATA:
			return {
				...state,
				movieList: {
					...state.movieList,
					[payload.mediaType]: payload.moviesData,
				},
			};
		case ADD_MOVIE_TO_FAVORITES:
			return {
				...state,
				favoriteMovies: [...state.favoriteMovies, payload],
			};
		case REMOVE_MOVIE_FROM_FAVORITES:
			return {
				...state,
				favoriteMovies: removeFavoriteMovie(
					state.favoriteMovies,
					payload
				),
			};
		default:
			return state;
	}
};

export default movieReducer;
