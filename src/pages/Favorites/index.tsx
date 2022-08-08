import { useSelector } from 'react-redux';
import { Poster } from '../../components';
import { getAllMovies } from '../../redux/slice/movieSlice';
import './index.scss';

const Favorites = () => {
	const movies: any = useSelector<any>(getAllMovies);
	const moviesToDisplay = movies.filter(
		(x: { favorite: boolean }) => x.favorite === true
	);

	return (
		<div className='favorite-container'>
			{moviesToDisplay &&
				moviesToDisplay.map((item: { id: any }) => (
					<div key={item.id}>
						<Poster movie={item} />
					</div>
				))}
		</div>
	);
};

export default Favorites;
