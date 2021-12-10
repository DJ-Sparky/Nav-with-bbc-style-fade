import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Fade.module.scss';
import hero from '../../images/oven.jpg';
import Link from 'next/link';

function FadeOven() {
	return (
		<div className={styles.root}>
			<div className={styles.background} />
			<Image
				src={hero}
				alt='Oven Cleaning'
				objectFit='cover'
				objectPosition='center'
				layout='fill'
				blurDataURL='data:...'
				placeholder='blur'
				priority
			/>
			<div className={styles.wrapper}>
				<h1>A Sparkling Oven</h1>
				<br />
				<h2>Complete oven cleaning services available.</h2>
				<br />
				<Link href='/oven-cleaning'>
					<a>
						<button className={styles.button}>Learn More</button>
					</a>
				</Link>
			</div>
		</div>
	);
}

export default FadeOven;
