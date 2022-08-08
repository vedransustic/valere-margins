import { apiDataType, apiResponseType } from '../../types';

export const addMoviesToList = (array: Array<Array<apiDataType>>) => {
	const newArray = array.flat();
	const resoult = Array.from(new Set(newArray.map((x) => x.id))).map((id) => {
		return newArray.find((x) => x.id === id);
	});
	return resoult.map((movie: any) => {
		return formatResponse(movie);
	});
};

export const toggleFavorites = (array: Array<apiDataType>, id: number) => {
	return array.map((movie) => {
		return movie.id !== id
			? { ...movie }
			: { ...movie, favorite: !movie.favorite };
	});
};

export const formatResponse = (movie: apiResponseType) => {
	return {
		id: movie?.id,
		title: movie?.original_title,
		overview: movie?.overview,
		language: movie?.original_language,
		genre: movie?.genre_ids,
		adult: movie?.adult,
		vote: movie?.vote,
		poster_path: movie?.poster_path,
		release_date: movie?.release_date,
		favorite: false,
	};
};
