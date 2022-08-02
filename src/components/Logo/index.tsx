import './index.scss';
import { LogoImg } from '../../assets/img';
import { Image } from '../';

const Logo = () => {
	return (
		<div className='logo'>
			<Image url={LogoImg} width={400} height={60} />
		</div>
	);
};

export default Logo;
