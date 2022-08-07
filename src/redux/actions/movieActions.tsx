import {
	ADD_MOVIE_DATA_REQUEST,
	ADD_MOVIE_DATA_SUCCESS,
	ADD_MOVIE_DATA_FAIL,
	TOGGLE_FAVORITES,
} from '../../constants/redux';
import { apiDataType } from '../../types';

const addMovieLoading = () => {
	return {
		type: ADD_MOVIE_DATA_REQUEST,
	};
};

const addMovieData = (data: Array<Array<apiDataType>>) => {
	return {
		type: ADD_MOVIE_DATA_SUCCESS,
		payload: data,
	};
};

const addMovieError = (error: any) => {
	return {
		type: ADD_MOVIE_DATA_FAIL,
		payload: error,
	};
};

const toggleFavorites = (id: number) => {
	return {
		type: TOGGLE_FAVORITES,
		payload: id,
	};
};

export { addMovieLoading, addMovieData, addMovieError, toggleFavorites };
