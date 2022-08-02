import './index.scss';
import { Logo, Image } from '../../components';
import { SearchImg } from '../../assets/img';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<Logo />
			<div className='navigation__menu'>
				<ul className='navigation__menu__items'>
					<li>Novo</li>
					<li>Najgledanije</li>
					<li className='search-li'>
						<div className='search-container'>
							<Image url={SearchImg} width={24} height={24} />
							<input type='text' placeholder='Pretrazi' />
						</div>
					</li>
					<li>
						<div className='signup-button'> Prijava </div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
