import React from 'react';
import { useState } from 'react';
import G1 from '../images/gallery/G1.jpg';
import G2 from '../images/gallery/G2.jpg';

import styles from '../styles/Gallery.module.css';

import Image from 'next/image';
const Gallery = () => {
	let data = [
		{
			id: 1,
			imgSrc: G1,
		},
		{
			id: 2,
			imgSrc: G2,
		},
	];
	let [model, setModel] = useState(false);
	let [tempimgSrc, setTempImgSrc] = useState('');
	let getImg = (imgSrc) => {
		setTempImgSrc(imgSrc);
		setModel(true);
	};
	return (
		<div className={styles.gallery}>
			{data.map((item, imgSrc) => (
				<div
					className={`${model ? styles.modelOpen : ''}${styles.model}`}
					key={imgSrc}
				>
					<p>{item.id}</p>
					<Image
						src={item.imgSrc}
						width={400}
						height={400}
						objectFit='cover'
						objectPosition='top'
						blurDataURL='data:...'
						placeholder='blur'
					/>
				</div>
			))}
		</div>
	);
};

export default Gallery;
