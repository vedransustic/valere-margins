import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	HorizontalDivide,
	MainHeader,
	NormalHeader,
	NormalText,
} from '../../components';
import {
	fetchAsyncMovieDetail,
	getAllMovies,
	getSelectedMovie,
	removeMovieDetail,
	toggleFavorites,
} from '../../redux/slice/movieSlice';

import './index.scss';

const MovieDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const movies = useSelector(getAllMovies);
	const movie = movies.find((x) => x.id === parseInt(id));

	if (!movie)
		return (
			<div className='loading'>
				<MainHeader text='Loading...' />
			</div>
		);

	const handleClick = (id: number) => {
		dispatch(toggleFavorites(id));
	};

	return (
		<div className='movieDetails'>
			<HorizontalDivide>
				<img
					className='movie_image'
					src={`${import.meta.env.VITE_API_POSTER_URL}${
						movie.poster_path
					}`}
					alt={movie.title}
				/>
				<div className='movie_info'>
					<NormalHeader text={movie.title} />
					<div className='pills'>
						<div className='pill media_type'>
							{movie.vote ? movie.vote / 10 : 'Neocijenjeno'}
						</div>

						<div className='lang pill'>{movie.language}</div>

						<div className='release_date pill'>
							{movie.release_date}
						</div>

						{movie.adult && <div className='adult'>18+</div>}
					</div>
					<NormalText text={movie.overview} />
					<div className='button-container'>
						{movie.favorite ? (
							<div
								className='favorite-button'
								onClick={() => handleClick(movie.id)}>
								Remove from favorite
							</div>
						) : (
							<div
								className='favorite-button'
								onClick={() => handleClick(movie.id)}>
								Add to favorite
							</div>
						)}
					</div>
				</div>
			</HorizontalDivide>
		</div>
	);
};

export default MovieDetails;
