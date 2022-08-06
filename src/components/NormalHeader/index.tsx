import './index.scss';
import { propType } from './types';

const NormalHeader: React.FC<propType> = ({ text }) => {
	return <h4 className='normalHeader'>{text}</h4>;
};
export default NormalHeader;
