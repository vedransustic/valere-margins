import React from 'react';

type propType = {
	width: number;
	height: number;
	url: string;
};

const Image: React.FC<propType> = ({ width, height, url }) => {
	return (
		<img
			src={url}
			width={`${width}px`}
			height={`${height}px`}
			alt='image_404'
		/>
	);
};

export default Image;
