import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home, MovieDetails, MovieDiscovery, Error, Favorites } from './pages';
import Layout from './Layout';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from './redux/slice/movieSlice';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncMovies());
	}, [dispatch]);

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
};

export default App;
