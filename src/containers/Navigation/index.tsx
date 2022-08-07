import './index.scss';
import { Logo, Image } from '../../components';
import { SearchImg } from '../../assets/img';
import { useNavigate } from 'react-router-dom';

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
						<div className='search-container'>
							<Image
								url={SearchImg}
								width={'24px'}
								height={'24px'}
								alt='search_glass'
							/>
							<input type='text' placeholder='Pretrazi' />
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
