import axios from 'axios';
import { requestType } from '../types';
import instance from './axios';

const requests: Array<requestType> = [
	{
		name: 'Akcijski filmovi',
		genre: 28,
		url: `discover/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&with_genres=28`,
	},
	{
		name: 'Horor filmovi',
		genre: 27,
		url: `discover/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&with_genres=27`,
	},
	{
		name: 'Komedije',
		genre: 35,
		url: `discover/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&with_genres=35`,
	},
	{
		name: 'Romanse',
		genre: 10749,
		url: `discover/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&with_genres=10749`,
	},
];

const getDataFromRequests = (requests: Array<requestType>) => {
	return axios
		.all(
			requests.map((item: any) => {
				return instance.get(item.url);
			})
		)
		.then(
			axios.spread((...data) => {
				return data.map((item) => {
					return item.data.results;
				});
			})
		)
		.catch((err) => console.error(err));
};

export { requests, getDataFromRequests };
