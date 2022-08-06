import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StarEmpty, StarFull } from '../../assets/img';
import { movieType } from '../../components/MediaRow/types';
import {
	addMovieToFavorites,
	removeMovieFromFavorites,
} from '../../redux/actions/movieActions';
import './index.scss';

const Poster: React.FC<any> = ({ movie }) => {
	const dispatch = useDispatch();
	const [isFavorite, setIsFavorite] = useState(false);

	const setAsFavorite = () => {
		dispatch(addMovieToFavorites(movie));
		setIsFavorite(true);
	};

	const removeFromFavorites = () => {
		dispatch(removeMovieFromFavorites(movie.id));
		setIsFavorite(false);
	};

	return (
		<div className='poster'>
			{isFavorite ? (
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
		</div>
	);
};

export default Poster;
