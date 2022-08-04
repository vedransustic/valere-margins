import React from 'react';
import { MainHeader, NormalText, Subtitle } from '..';
import { propType } from './types';
import './index.scss';

const VerticalDivide: React.FC<propType> = ({ subtitle, header, text }) => {
	return (
		<div className='vertical_divide'>
			<div className='vertical_divide__center_content'>
				<Subtitle text={subtitle} />
				<MainHeader text={header} />
				<NormalText text={text} />
			</div>
		</div>
	);
};

export default VerticalDivide;
