import React from 'react';
import './index.scss';
import { propType } from './types';

const MainHeader: React.FC<propType> = ({ text }) => {
	return <h2 className='main_header'>{text}</h2>;
};

export default MainHeader;
