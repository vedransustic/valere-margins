import store from '../redux/store';

export type apiDataType = {
	id: number;
	title: string;
	overview: string;
	language: string;
	genre: Array<number>;
	adult: boolean;
	vote: number;
	poster_path: string;
	release_date: string;
	favorite: boolean;
};

export type stateType = {
	movies: Array<apiDataType>;
	selectedMovie: apiDataType;
};

export type AppDispatch = typeof store.dispatch;
