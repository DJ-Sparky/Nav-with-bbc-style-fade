import React from 'react';
import Image from 'next/image';
import styles from '../styles/Fade.module.css';
import hero from '../images/hero.jpg';

function fadeCard() {
	return (
		<div className={styles.root}>
			<div className={styles.background} />
			<Image
				src={hero}
				alt={'hero image'}
				objectFit='cover'
				objectPosition='center'
				layout='fill'
				blurDataURL='data:...'
				placeholder='blur'
				priority
			/>
			<p>This is the headline that I want to overlay the fade.</p>
		</div>
	);
}

export default fadeCard;
