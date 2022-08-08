import React from 'react';
import './index.scss';
import { propType } from './types';

const NormalText: React.FC<propType> = ({ text }) => {
	return <p className='normal_text'>{text}</p>;
};

export default NormalText;
