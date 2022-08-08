import './index.scss';
import { Logo, Image } from '../../components';
import { SearchImg } from '../../assets/img';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getAllMovies } from '../../redux/slice/movieSlice';

const Navigation = () => {
	const navigate = useNavigate();
	const movies: any = useSelector<any>(getAllMovies);
	const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
	const [inputText, setInputText] = useState('');

	const handleInput = (str: string) => {
		setInputText(str);
		const result = movies.filter((movie: { title: string }) => {
			return movie.title.toLowerCase().includes(str.toLowerCase());
		});
		setMoviesToDisplay(result);
	};

	return (
		<nav className='navigation'>
			<div className='position_logo'>
				<Logo />
			</div>
			<div className='navigation__menu'>
				<ul className='navigation__menu__items'>
					<li onClick={() => navigate('/')}>Pocetna</li>
					<li onClick={() => navigate('/movies/discover')}>
						Filmovi
					</li>
					<li onClick={() => navigate('/movies/favorites')}>
						Favoriti
					</li>
					<li className='search-li'>
						<div className='search-container'>
							<input
								type='text'
								placeholder='Pretrazi filmove'
								onChange={(e) => handleInput(e.target.value)}
							/>
							<Image
								url={SearchImg}
								width={'24px'}
								height={'24px'}
								alt='search_glass'
							/>
						</div>
						{inputText && (
							<div className='search-resoults'>
								{moviesToDisplay
									.slice(0, 10)
									.map((movie: any) => {
										return (
											<div
												key={movie.id}
												className='resoult_item'
												onClick={() => {
													setInputText('');
													navigate(
														`/movies/${movie.id}`
													);
												}}>
												<p>{movie.title}</p>
											</div>
										);
									})}
							</div>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
