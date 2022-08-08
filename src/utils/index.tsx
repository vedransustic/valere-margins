import { useSelector } from 'react-redux';
import { getAllMovies } from '../redux/slice/movieSlice';

export const loadFromLocalStorage = () => {
	try {
		const serialisedState = localStorage.getItem('persistantState2');
		if (serialisedState === null) return useSelector<any>(getAllMovies);
		return JSON.parse(serialisedState);
	} catch (err) {
		console.warn(err);
		return undefined;
	}
};
