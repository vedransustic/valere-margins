import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home, MovieDetails, MovieDiscovery, Error } from './pages';
import Layout from './Layout';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path='/movies/discover'
						element={<MovieDiscovery />}
					/>
					<Route path='/movies/:id' element={<MovieDetails />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
