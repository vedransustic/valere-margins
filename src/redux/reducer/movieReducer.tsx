import { PayloadAction } from '@reduxjs/toolkit';
import {
	ADD_MOVIE_DATA,
	ADD_MOVIE_TO_FAVORITES,
	REMOVE_MOVIE_FROM_FAVORITES,
} from '../../constants/redux';
import { stateType } from '../../types';
import {
	addMoviesToList,
	addToFavorites,
	removeFavoriteMovie,
} from '../util/movieUtil';

const initialState: stateType = {
	movieList: [],
};

const movieReducer = (state = initialState, action: PayloadAction<any>) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_MOVIE_DATA:
			return {
				movieList: addMoviesToList(payload),
			};
		case ADD_MOVIE_TO_FAVORITES:
			return {
				movieList: addToFavorites(state.movieList, payload),
			};
		case REMOVE_MOVIE_FROM_FAVORITES:
			return {
				movieList: removeFavoriteMovie(state.movieList, payload),
			};
		default:
			return state;
	}
};

export default movieReducer;
