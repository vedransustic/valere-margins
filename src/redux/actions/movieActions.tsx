import {
	ADD_MOVIE_DATA,
	ADD_MOVIE_TO_FAVORITES,
	REMOVE_MOVIE_FROM_FAVORITES,
} from '../../constants/redux';
import { apiDataType } from '../../types';

const addMovieData = (data: Array<Array<apiDataType>>) => {
	return {
		type: ADD_MOVIE_DATA,
		payload: data,
	};
};

const addMovieToFavorites = (id: number) => {
	return {
		type: ADD_MOVIE_TO_FAVORITES,
		payload: id,
	};
};

const removeMovieFromFavorites = (id: number) => {
	return {
		type: REMOVE_MOVIE_FROM_FAVORITES,
		payload: id,
	};
};

export { addMovieData, addMovieToFavorites, removeMovieFromFavorites };
