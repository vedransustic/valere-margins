import React from 'react';
import './index.scss';
import { propType } from './types';

const Subtitle: React.FC<propType> = ({ text }) => {
	return <h4 className='subtitle'>{text}</h4>;
};

export default Subtitle;
