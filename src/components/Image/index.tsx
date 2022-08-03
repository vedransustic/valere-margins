import React from 'react';
import { propType } from './types';

const Image: React.FC<propType> = ({ width, height, url, alt }) => {
	return <img src={url} width={`${width}`} height={`${height}`} alt={alt} />;
};

Image.defaultProps = {
	width: 'auto',
	height: 'auto',
	alt: 'image_404',
};

export default Image;
