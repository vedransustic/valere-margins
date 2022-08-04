import React from 'react';
import './index.scss';
import { propTypes } from './types';

const Button: React.FC<propTypes> = ({ text, variant }) => {
	return <button className={variant}>{text}</button>;
};

Button.defaultProps = {
	variant: 'normal',
};

export default Button;
