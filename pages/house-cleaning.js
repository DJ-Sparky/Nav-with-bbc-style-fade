import React from 'react';
import Image from 'next/image';
import styles from '../styles/Fade.module.scss';
import Link from 'next/link';

const HouseCleaning = () => {
	return (
		<div>
			House Cleaning
			<Link href='/'>
				<a>
					<button className={styles.button}>Homepage</button>
				</a>
			</Link>
		</div>
	);
};

export default HouseCleaning;
