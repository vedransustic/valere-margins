import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	HorizontalDivide,
	MainHeader,
	NormalHeader,
	NormalText,
} from '../../components';
import { toggleFavorites } from '../../redux/slice/movieSlice';
import { loadFromLocalStorage } from '../../utils';

import './index.scss';

const MovieDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { loading, movies, error }: any = loadFromLocalStorage();
	const movie = movies.find((x: { id: number }) => x.id === Number(id));
	const [isFav, setFav] = useState<boolean>(movie.favorite);

	const handleClick = (id: number) => {
		setFav((isFav) => !isFav);
		dispatch(toggleFavorites(id));
	};

	if (loading) {
		return (
			<div className='loading'>
				<MainHeader text='Loading...' />
			</div>
		);
	}

	if (error) {
		if (error) return <MainHeader text={error} />;
	}

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
					<div className='movie_info__pills'>
						<div className='movie_info__pills__pill media_type'>
							{movie.vote ? `${movie.vote} / 10` : 'Neocijenjeno'}
						</div>

						<div className='lang movie_info__pills__pill'>
							{movie.language}
						</div>

						<div className='release_date movie_info__pills__pill'>
							{movie.release_date}
						</div>

						{movie.adult && <div className='adult'>18+</div>}
					</div>
					<NormalText text={movie.overview} />
					<div className='movie_info__button_container'>
						{isFav ? (
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
