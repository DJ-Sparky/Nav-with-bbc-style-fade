import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Welcome from '../components/Homepage/Welcome';
import FadeHome from '../components/Homepage/FadeHome';
import FadeOven from '../components/Homepage/FadeOven';
import { ScrollToTop } from '../components/scroll';

function HomePage() {
	return (
		<>
			<div>
				<Head>
					<title>Freedom Cleaning Services Homepage</title>
				</Head>
				<div>
					<FadeHome />
				</div>
				<div>
					<FadeOven />
				</div>
				<div>© Sparky {new Date().getFullYear()}</div>
			</div>
			<ScrollToTop />
		</>
	);
}

export default HomePage;
