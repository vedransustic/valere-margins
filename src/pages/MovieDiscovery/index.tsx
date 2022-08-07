import { requests } from '../../api/requests';
import { MediaRow } from '../../components';

const MovieDiscovery = () => {
	return (
		<div>
			<MediaRow genre={10} key={100} />
			{requests.map((request, idx) => {
				return <MediaRow key={idx} genre={request.genre} />;
			})}
		</div>
	);
};

export default MovieDiscovery;
