import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import { Navigation } from './containers';
import { Home, MovieDetails, MovieDiscovery, Error } from './pages';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<main className='app-content'>
				<Routes>
					<Route index element={<Home />} />
					<Route
						path='/movies/discover'
						element={<MovieDiscovery />}
					/>
					<Route path='/movies/:id' element={<MovieDetails />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
