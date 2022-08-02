import React from 'react';
import './index.scss';
import { PropTypes } from './types';

const DivideContent: React.FC<PropTypes> = ({ children }) => {
	return <div className='divide'>{children}</div>;
};

export default DivideContent;
