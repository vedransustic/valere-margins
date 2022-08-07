import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { NormalHeader } from '..';
import { propType } from './types';
import { Image } from '..';
import './index.scss';
import Poster from '../../containers/Poster';
import { LeftArrow, RightArrow } from '../../assets/img';
import { getAllMovies } from '../../redux/slice/movieSlice';

const getName = (genre: number, movies: any) => {
	switch (genre) {
		case 10:
			return {
				name: 'Top 10',
				data: [...movies]
					.sort(
						(a: { vote: number }, b: { vote: number }) =>
							b.vote - a.vote
					)
					.slice(0, 10),
			};
		case 28:
			return {
				name: 'Akcijski filmovi',
				data: movies.filter((x: { genre: number[] }) =>
					x.genre.includes(genre)
				),
			};
		case 27:
			return {
				name: 'Horror filmovi',
				data: movies.filter((x: { genre: number[] }) =>
					x.genre.includes(genre)
				),
			};
		case 35:
			return {
				name: 'Komedije',
				data: movies.filter((x: { genre: number[] }) =>
					x.genre.includes(genre)
				),
			};
		case 10749:
			return {
				name: 'Romanse',
				data: movies.filter((x: { genre: number[] }) =>
					x.genre.includes(genre)
				),
			};
		default:
			return {
				name: 'Random',
				data: movies.sort(() => 0.5 - Math.random()).slice(0, 20),
			};
	}
};

const MediaRow: React.FC<propType> = ({ genre }) => {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);
	const moviesRef = useRef<any>(null);
	const movies: any = useSelector<any>(getAllMovies);
	const moviesToDisplay = getName(genre, movies);

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
			<NormalHeader text={moviesToDisplay.name} />
			<div className='media__row'>
				<div className='media__row__movies' ref={moviesRef}>
					{moviesToDisplay &&
						moviesToDisplay.data.map((movie: any) => (
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
