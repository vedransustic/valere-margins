import { useSelector } from 'react-redux';
import { getAllMovies } from '../redux/slice/movieSlice';

export const loadFromLocalStorage = () => {
	try {
		const serialisedState = localStorage.getItem('persistantState');
		if (serialisedState === null) return useSelector(getAllMovies);
		return {
			loading: JSON.parse(serialisedState).loading,
			movies: JSON.parse(serialisedState).movies,
			error: JSON.parse(serialisedState).error,
		};
	} catch (err) {
		console.warn(err);
		return undefined;
	}
};
