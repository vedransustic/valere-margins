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
	movieList: Array<apiDataType>;
};
