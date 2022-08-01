import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home, MovieDetails, MovieDiscovery, Error } from './pages';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies/discover' element={<MovieDiscovery />} />
				<Route path='/movies/:id' element={<MovieDetails />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
