import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StarEmpty, StarFull } from '../../assets/img';
import { NormalText } from '../../components';
import {
	addMovieToFavorites,
	removeMovieFromFavorites,
} from '../../redux/actions/movieActions';
import './index.scss';

const Poster: React.FC<any> = ({ movie }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const setAsFavorite = () => {
		dispatch(addMovieToFavorites(movie.id));
	};

	const removeFromFavorites = () => {
		dispatch(removeMovieFromFavorites(movie.id));
	};

	return (
		<div className='poster'>
			{movie.favorite ? (
				<img
					src={StarFull}
					alt='favorite'
					className='favorite'
					onClick={removeFromFavorites}
				/>
			) : (
				<img
					src={StarEmpty}
					alt='favorite'
					className='favorite'
					onClick={setAsFavorite}
				/>
			)}
			<img
				src={`${import.meta.env.VITE_API_POSTER_URL}${
					movie.poster_path
				}`}
				alt={movie.original_title}
			/>
			<div
				className='poster__more_info'
				onClick={() => navigate(`/movies/${movie.id}`)}>
				<NormalText text='More info' />
			</div>
		</div>
	);
};

export default Poster;
