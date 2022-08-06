import { movieType } from '../../components/MediaRow/types';
import {
	ADD_MOVIE_DATA,
	ADD_MOVIE_TO_FAVORITES,
	REMOVE_MOVIE_FROM_FAVORITES,
} from '../../constants/redux';

const addMovieData = (mediaType: string, moviesData: Array<object>) => {
	return {
		type: ADD_MOVIE_DATA,
		payload: { mediaType, moviesData },
	};
};

const addMovieToFavorites = (movieData: movieType) => {
	return {
		type: ADD_MOVIE_TO_FAVORITES,
		payload: movieData,
	};
};

const removeMovieFromFavorites = (id: number) => {
	return {
		type: REMOVE_MOVIE_FROM_FAVORITES,
		payload: id,
	};
};

export { addMovieData, addMovieToFavorites, removeMovieFromFavorites };
