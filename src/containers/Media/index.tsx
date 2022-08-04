import { Image, MovieItem } from '../../components';
import { LeftArrow, RightArrow } from '../../assets/img';
import './index.scss';

const Media = () => {
	return (
		<>
			<div className='list'>
				{/* Insert title here? */}
				<span className='listTitle'>Continue to watch</span>
				<div className='wrapper'>
					<Image width={'40px'} height={'40px'} url={LeftArrow} />
					<div className='container'>
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
						<MovieItem />
					</div>
					<Image width={'40px'} height={'40px'} url={RightArrow} />
				</div>
			</div>
		</>
	);
};

export default Media;
