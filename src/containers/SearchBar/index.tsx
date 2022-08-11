import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, MainHeader } from '../../components';
import { SearchImg } from '../../assets/img';
import './index.scss';
import { loadFromLocalStorage } from '../../utils';

const SearchBar = () => {
	const navigate = useNavigate();
	const { loading, movies, error }: any = loadFromLocalStorage();
	const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
	const [inputText, setInputText] = useState('');

	const handleInput = (str: string) => {
		setInputText(str);
		const result = movies.filter((movie: { title: string }) => {
			return movie.title.toLowerCase().includes(str.toLowerCase());
		});
		setMoviesToDisplay(result);
	};

	if (loading) {
		return (
			<div className='loading'>
				<MainHeader text='Loading...' />
			</div>
		);
	}

	if (error) {
		return <h2>{JSON.stringify(error)}</h2>;
	}

	return (
		<>
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
					{moviesToDisplay.slice(0, 10).map((movie: any) => {
						return (
							<div
								key={movie.id}
								className='resoult_item'
								onClick={() => {
									setInputText('');
									navigate(`/movies/${movie.id}`);
								}}>
								<p>{movie.title}</p>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default SearchBar;
