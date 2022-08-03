import Image from '../Image';
import EU1 from '../../assets/img/EU1.png';
import EU2 from '../../assets/img/EU2.png';
import './index.scss';

const Footer = () => {
	return (
		<footer>
			<div className='footer-content'>
				<h2 className='copyright'>
					© 2022 MarginWatch - Vodič kroz platforme za streaming - -
					All external content remains the property of the rightful
					owner. Impresum · Politika privatnosti
				</h2>
				<div className='images'>
					<Image url={EU1} width={'110px'} height={'auto'} />
					<Image url={EU2} width={'80px'} height={'auto'} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
