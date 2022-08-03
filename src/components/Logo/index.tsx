import './index.scss';
import { LogoImg } from '../../assets/img';
import { Image } from '../';

const Logo = () => {
	return (
		<div className='logo'>
			<Image url={LogoImg} />
		</div>
	);
};

export default Logo;
