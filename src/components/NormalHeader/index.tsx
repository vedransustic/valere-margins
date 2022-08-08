import './index.scss';
import { propType } from './types';

const NormalHeader: React.FC<propType> = ({ text }) => {
	return <h4 className='normal_header'>{text}</h4>;
};
export default NormalHeader;
