import { PayloadAction } from '@reduxjs/toolkit';
import {
	ADD_MOVIE_DATA_REQUEST,
	ADD_MOVIE_DATA_SUCCESS,
	ADD_MOVIE_DATA_FAIL,
	TOGGLE_FAVORITES,
} from '../../constants/redux';
import { stateType } from '../../types';
import { addMoviesToList, toggleFavorites } from '../util/movieUtil';

const initialState: stateType = {
	loading: false,
	error: null,
	movieList: [],
};

const movieReducer = (state = initialState, action: PayloadAction<any>) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_MOVIE_DATA_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ADD_MOVIE_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				movieList: addMoviesToList(payload),
			};
		case ADD_MOVIE_DATA_FAIL:
			return {
				...state,
				error: payload,
			};
		case TOGGLE_FAVORITES:
			return {
				...state,
				movieList: [],
			};
		default:
			return state;
	}
};
export default movieReducer;
