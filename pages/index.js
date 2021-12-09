import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Welcome from '../components/Homepage/Welcome';
import Fadecard from '../components/Homepage/Fade';

function HomePage() {
	return (
		<div>
			<div>
				<Fadecard />
			</div>
			<div>© Sparky {new Date().getFullYear()}</div>
		</div>
	);
}

export default HomePage;
