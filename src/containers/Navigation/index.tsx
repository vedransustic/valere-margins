import './index.scss';
import { Logo, Image } from '../../components';
import { SearchImg } from '../../assets/img';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<div className='position_logo'>
				<Logo />
			</div>
			<div className='navigation__menu'>
				<ul className='navigation__menu__items'>
					<li>Novo</li>
					<li>Najgledanije</li>
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
					<li className='signup-button'>Prijava</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
