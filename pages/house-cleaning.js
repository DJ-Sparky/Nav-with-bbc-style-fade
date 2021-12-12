import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Fade.module.scss';
import Link from 'next/link';

const HouseCleaning = () => {
	return (
		<div>
			<Head>
				<title>House Cleaning</title>
			</Head>
			House Cleaning
			<Link href='/' aria-label='visit our home page'>
				<a>
					<button className={styles.button} aria-label='Home Page'>
						Homepage
					</button>
				</a>
			</Link>
		</div>
	);
};

export default HouseCleaning;
