import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home, MovieDetails, MovieDiscovery, Error, Favorites } from './pages';
import Layout from './Layout';
import { useEffect } from 'react';
import { getDataFromRequests, requests } from './api/requests';
import { addMovieData } from './redux/actions/movieActions';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const getData = async () => {
			return await new Promise(async (resolve, reject) => {
				return await getDataFromRequests(requests)
					.then((data) => resolve(data))
					.catch((err) => reject(err));
			});
		};

		getData()
			.then((res: any) => {
				const data = requests.map((item, idx) => {
					return res[idx].data.results.map((item: any) => {
						console.log(item);
						return {
							id: item.id,
							title: item.original_title,
							overview: item.overview,
							language: item.original_language,
							adult: item.adult,
							genre: item.genre_ids,
							vote: item.vote_average,
							poster_path: item.poster_path,
							release_date: item.release_date,
							favorite: false,
						};
					});
				});
				dispatch(addMovieData(data));
			})
			.catch((err: any) => console.error('ERROR:: ', err));
	}, [requests]);

	return (
		<div className='App'>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path='/movies/discover'
						element={<MovieDiscovery />}
					/>
					<Route path='/movies/favorites' element={<Favorites />} />
					<Route path='/movies/:id' element={<MovieDetails />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
