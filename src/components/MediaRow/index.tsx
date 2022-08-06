import { useDispatch, useSelector } from 'react-redux';
import axios from '../../api/axios';
import { useEffect, useRef, useState } from 'react';
import { NormalHeader } from '..';
import { movieType, propType } from './types';
import { Image } from '..';
import { addMovieData } from '../../redux/actions/movieActions';
import './index.scss';
import Poster from '../../containers/Poster';
import { LeftArrow, RightArrow } from '../../assets/img';

const MediaRow: React.FC<propType> = ({ title, url }) => {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);
	const moviesRef = useRef<any>(null);
	const dispatch = useDispatch();
	const movies: any = useSelector<any>(
		(state) => state.movies.movieList[title]
	);

	useEffect(() => {
		async function getMovieData() {
			await axios
				.get(url)
				.then((res) => dispatch(addMovieData(title, res.data.results)))
				.catch((err) => console.error('ERROR:: ', err.toJSON()));
		}
		getMovieData();
	}, [url]);

	const handleClick = (direction: string) => {
		setIsMoved(true);
		let distance = moviesRef?.current?.getBoundingClientRect().x - 70;

		if (direction === 'left' && slideNumber > 0) {
			setSlideNumber((slideNumber) => slideNumber - 1);
			moviesRef.current.style.transform = `translateX(${
				1230 + distance
			}px)`;
		}

		if (
			direction === 'right' &&
			slideNumber <=
				Math.floor(
					moviesRef?.current?.getBoundingClientRect().width /
						window.screen.width
				)
		) {
			setSlideNumber((slideNumber) => slideNumber + 1);
			moviesRef.current.style.transform = `translateX(${
				-1230 + distance
			}px)`;
		}

		setTimeout(() => {
			setIsMoved(false);
		}, 1000);
	};

	return (
		<div className='media'>
			<NormalHeader text={title} />
			<div className='media__row'>
				<div className='media__row__movies' ref={moviesRef}>
					{movies &&
						movies.map((movie: movieType) => (
							<Poster movie={movie} key={movie.id} />
						))}
				</div>
				<div
					className='media__row__arrow l'
					onClick={() => handleClick('left')}
					style={{ display: isMoved ? 'none' : '' }}>
					<Image url={LeftArrow} width={'30px'} height={'30px'} />
				</div>
				<div
					className='media__row__arrow r'
					onClick={() => handleClick('right')}
					style={{ display: isMoved ? 'none' : '' }}>
					<Image url={RightArrow} width={'30px'} height={'30px'} />
				</div>
			</div>
		</div>
	);
};

export default MediaRow;
