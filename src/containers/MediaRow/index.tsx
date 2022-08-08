import { useSelector } from 'react-redux';
import { memo, useEffect, useRef } from 'react';
import { MainHeader, NormalHeader } from '../../components';
import { propType } from './types';
import './index.scss';
import Poster from '../../components/Poster';
import { getAllMovies } from '../../redux/slice/movieSlice';
import { apiDataType } from '../../types';

const getName = (genre: number, movies: Array<apiDataType>) => {
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
	const moviesRef = useRef<HTMLDivElement>(document.createElement('div'));
	const movies = useSelector(getAllMovies);
	const moviesToDisplay = getName(genre, movies);

	if (!moviesToDisplay)
		return (
			<div className='loading'>
				<MainHeader text='Loading...' />
			</div>
		);

	return (
		<div className='media'>
			<NormalHeader text={moviesToDisplay.name} />
			<div className='media__row'>
				<div
					className='shadow-scroll-x'
					style={{ maxWidth: '400px' }}
				/>
				<div className='media__row__movies' ref={moviesRef}>
					{moviesToDisplay &&
						moviesToDisplay.data.map((movie: any) => (
							<Poster movie={movie} key={movie.id} />
						))}
				</div>
			</div>
		</div>
	);
};

export default MediaRow;
