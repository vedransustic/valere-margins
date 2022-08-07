import { apiDataType } from '../../types';

export const addMoviesToList: any = (array: Array<Array<apiDataType>>) => {
	const newArray = array.flat();

	const uniqueArray = Array.from(new Set(newArray.map((x) => x.id))).map(
		(id) => {
			return newArray.find((x) => x.id === id);
		}
	);

	return uniqueArray;
};

export const addToFavorites = (array: Array<apiDataType>, id: number) => {
	return array.map((movie) => {
		return movie.id === id ? { ...movie, favorite: true } : movie;
	});
};

export const removeFavoriteMovie = (array: Array<apiDataType>, id: number) => {
	return array.map((movie) => {
		return movie.id === id ? { ...movie, favorite: false } : movie;
	});
};
