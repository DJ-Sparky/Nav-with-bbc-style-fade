import React from 'react';
import Image from 'next/image';
import styles from '../../styles/FadeReverse.module.scss';
import hero from '../../images/oven.jpg';
import Link from 'next/link';

function FadeReverse() {
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
			<div className={styles.wrapper}>
				<h1>A Sparkling Oven</h1>
				<br />
				<h2>
					Central to your kitchen and heart of the home. Discover our all in one
					oven cleaning service.
				</h2>
				<br />
				<Link href='/'>
					<a>
						<button className={styles.button}>Learn More</button>
					</a>
				</Link>
			</div>
		</div>
	);
}

export default FadeReverse;
