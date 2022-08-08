import './index.scss';
import { Logo } from '..';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../../containers';

const Navigation = () => {
	const navigate = useNavigate();

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
						<SearchBar />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
