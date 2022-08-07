import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HorizontalDivide, NormalHeader, NormalText } from '../../components';
//import { toggleFavorites } from '../../redux/actions/movieActions';

import './index.scss';

const MovieDetails = () => {
	const { id } = useParams();
	const movieInfo: any = useSelector<any>((state) => state.movies.movieList);
	//const dispatch = useDispatch();

	const movieForPreview = movieInfo.find(
		(movie: { id: number }) => movie.id.toString() === id
	);

	const handleClick = (id: number) => {
		//dispatch(toggleFavorites(id));
	};

	return (
		<div className='movieDetails'>
			<HorizontalDivide>
				<img
					className='movie_image'
					src={`${import.meta.env.VITE_API_POSTER_URL}${
						movieForPreview.poster_path
					}`}
					alt={movieForPreview.title}
				/>
				<div className='movie_info'>
					<NormalHeader text={movieForPreview.title} />
					<div className='pills'>
						<div className='pill media_type'>
							{movieForPreview.vote} / 10
						</div>
						<div className='lang pill'>
							{movieForPreview.language}
						</div>
						<div className='release_date pill'>
							{movieForPreview.release_date}
						</div>
						{movieForPreview.adult > 18 && (
							<div className='adult'>18+</div>
						)}
					</div>
					<NormalText text={movieForPreview.overview} />
					{movieForPreview.favorite ? (
						<div
							className='favorite_button'
							onClick={() => handleClick(movieForPreview.id)}>
							Makni iz favorita
						</div>
					) : (
						<div
							className='favorite_button'
							onClick={() => handleClick(movieForPreview.id)}>
							Dodaj u favorite
						</div>
					)}
				</div>
			</HorizontalDivide>
		</div>
	);
};

export default MovieDetails;
