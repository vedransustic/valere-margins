import { useSelector } from 'react-redux';
import { Poster } from '../../containers';
import './index.scss';

const Favorites = () => {
	const movies: any = useSelector<any>((state) => state.movies.movieList);

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
