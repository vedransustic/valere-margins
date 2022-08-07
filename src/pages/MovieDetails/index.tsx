import { useEffect } from 'react';
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
	getSelectedMovie,
	removeMovieDetail,
} from '../../redux/slice/movieSlice';

import './index.scss';

const MovieDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const movie = useSelector(getSelectedMovie);

	useEffect(() => {
		dispatch(fetchAsyncMovieDetail(id));
		return () => {
			dispatch(removeMovieDetail());
		};
	}, [dispatch, id]);

	if (Object.keys(movie).length === 0)
		return (
			<div className='loading'>
				<MainHeader text='Loading...' />
			</div>
		);

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

						{movie.adult > 18 && <div className='adult'>18+</div>}
					</div>
					<NormalText text={movie.overview} />
				</div>
			</HorizontalDivide>
		</div>
	);
};

export default MovieDetails;
