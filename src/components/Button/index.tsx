import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { propTypes } from './types';

const Button: React.FC<propTypes> = ({ text, variant, route }) => {
	const navigate = useNavigate();
	return (
		<button className={variant} onClick={() => navigate(`${route}`)}>
			{text}
		</button>
	);
};

Button.defaultProps = {
	route: '/',
	variant: 'normal',
};

export default memo(Button);
