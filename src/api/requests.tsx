type requestType = {
	name: string;
	url: string;
};

const requests: Array<requestType> = [
	{
		name: 'Popularno',
		url: `trending/all/week?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=eu-US`,
	},
	{
		name: 'Najbolje ocjenjivano',
		url: `movie/top_rated?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=eu-US`,
	},
	{
		name: 'Akcijski filmovi',
		url: `discover/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&with_genres=28`,
	},
	{
		name: 'Horor filmovi',
		url: `discover/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&with_genres=27`,
	},
	{
		name: 'Komedije',
		url: `discover/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&with_genres=35`,
	},
	{
		name: 'Romanse',
		url: `discover/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&with_genres=10749`,
	},
];

export default requests;
