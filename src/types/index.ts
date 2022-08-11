import store from '../redux/store';

export type requestType = {
	name: string;
	genre: number;
	url: string;
};

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

export type apiResponseType = {
	id: number;
	original_title: string;
	overview: string;
	original_language: string;
	genre_ids: Array<number>;
	adult: boolean;
	vote_average: number;
	poster_path: string;
	release_date: string;
	favorite: boolean;
};

export type stateType = {
	loading: boolean;
	movies: Array<apiDataType>;
	error: any;
};

export type AppDispatch = typeof store.dispatch;
