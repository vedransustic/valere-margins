import { MainHeader } from '../../components';
import { discoveryMainHeader } from '../../constants';
import { Media } from '../../containers';
import './index.scss';

const MovieDiscovery = () => {
	return (
		<div className='discovery-container'>
			<MainHeader text={discoveryMainHeader} />
			<h2 className='section-title' style={{ color: 'whitesmoke' }}>
				Trending now
			</h2>
			<Media />
		</div>
	);
};

export default MovieDiscovery;
