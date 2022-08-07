import './index.scss';
import { LogoImg } from '../../assets/img';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
	const navigate = useNavigate();
	return (
		<div className='logo'>
			<img src={LogoImg} onClick={() => navigate('/')} />
		</div>
	);
};

export default Logo;
