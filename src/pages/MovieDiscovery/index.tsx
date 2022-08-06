import { useSelector } from 'react-redux';
import requests from '../../api/requests';
import { MediaRow } from '../../components';
import { movieType } from '../../components/MediaRow/types';

const MovieDiscovery = () => {
	const favorites: Array<movieType> | any = useSelector<any>(
		(state) => state.movies.favoriteMovies
	);
	return (
		<>
			{requests.map((request, idx) => {
				return (
					<MediaRow
						key={idx}
						title={request.name}
						url={request.url}
					/>
				);
			})}
		</>
	);
};

export default MovieDiscovery;
