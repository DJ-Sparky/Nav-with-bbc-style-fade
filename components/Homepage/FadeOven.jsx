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
				placeholder='blur'
				priority
				quality='50'
			/>
			<div className={styles.wrapper}>
				<h1>A Sparkling Oven</h1>
				<h2>Complete oven cleaning services available.</h2>
				<Link href='/oven-cleaning'>
					<a aria-label='visit our oven cleaning page'>
						<button className={styles.button} aria-label='Learn More'>
							Oven Cleaning
						</button>
					</a>
				</Link>
			</div>
		</div>
	);
}

export default FadeOven;
