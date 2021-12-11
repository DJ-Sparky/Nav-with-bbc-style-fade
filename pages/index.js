import Head from 'next/head';
import FadeHome from '../components/Homepage/FadeHome';
import FadeOven from '../components/Homepage/FadeOven';

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
		</>
	);
}

export default HomePage;
