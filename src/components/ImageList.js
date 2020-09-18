import React from 'react';
import './ImageList.css';

const ImageList = ({ images }) => {
	return (
		<div className='image-list'>
			{images.map((image) => {
				return (
					<img
						key={image.id}
						src={image.urls.regular}
						alt={image.description}
					/>
				);
			})}
		</div>
	);
};

export default ImageList;
