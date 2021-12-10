import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Fade.module.scss';
import hero from '../../images/hero.jpg';
import Link from 'next/link';

function FadeHome() {
	return (
		<div className={styles.root}>
			<div className={styles.background} />
			<Image
				src={hero}
				alt='Full House Cleaning Services'
				objectFit='cover'
				objectPosition='center'
				layout='fill'
				blurDataURL='data:...'
				placeholder='blur'
				priority
			/>
			<div className={styles.wrapper}>
				<h1>A brighter home.</h1>
				<br />
				<h2>Full house cleaning packages in your area.</h2>
				<br />
				<Link href='/house-cleaning'>
					<a>
						<button className={styles.button}>Learn More</button>
					</a>
				</Link>
			</div>
		</div>
	);
}

export default FadeHome;
