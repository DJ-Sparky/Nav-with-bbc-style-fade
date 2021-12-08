import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Fadecard from '../components/Fade';

function HomePage() {
	return (
		<div>
			<Fadecard />
		</div>
	);
}

export default HomePage;
