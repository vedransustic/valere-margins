import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StarEmpty, StarFull } from '../../assets/img';
import { NormalText } from '..';
import { toggleFavorites } from '../../redux/slice/movieSlice';
import './index.scss';

const Poster: React.FC<any> = ({ movie }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isFav, setFav] = useState(movie.favorite);

	const handleFavorite = (id: number) => {
		setFav((isFav: boolean) => !isFav);
		dispatch(toggleFavorites(id));
	};

	return (
		<div className='poster'>
			{isFav ? (
				<img
					src={StarFull}
					alt='favorite'
					className='favorite'
					onClick={() => handleFavorite(movie.id)}
				/>
			) : (
				<img
					src={StarEmpty}
					alt='favorite'
					className='favorite'
					onClick={() => handleFavorite(movie.id)}
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

export default memo(Poster);
