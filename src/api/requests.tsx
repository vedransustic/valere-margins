import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addMovieData } from '../redux/actions/movieActions';
import instance from './axios';

type requestType = {
	name: string;
	genre: number;
	url: string;
};

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

const getDataFromRequests = (requests: any) => {
	return axios
		.all(
			requests.map((item: any) => {
				return instance.get(item.url);
			})
		)
		.then(
			axios.spread((...data) => {
				return data;
			})
		)
		.catch((err) => console.error(err));
};

export { requests, getDataFromRequests };
