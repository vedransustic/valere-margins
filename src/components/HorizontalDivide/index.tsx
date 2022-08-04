import React from 'react';
import './index.scss';
import { PropTypes } from './types';

const HorizontalDivide: React.FC<PropTypes> = ({ children }) => {
	return (
		<section className='divide__container'>
			<div className='divide__container__content__left'>
				{children[0]}
			</div>
			<div className='divide__container__content__right'>
				{children[1]}
			</div>
		</section>
	);
};

export default HorizontalDivide;
