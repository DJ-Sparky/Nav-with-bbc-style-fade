import Head from 'next/head';
import FadeHome from '../components/Homepage/FadeHome';
import FadeOven from '../components/Homepage/FadeOven';
import ContactPage from '../components/Contact/Contact';
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
				<div className='font-bold text-xl mt-2'>Text here</div>
				<div>
					<FadeOven />
				</div>
				<div>
					<ContactPage />
				</div>
				<div>© Sparky {new Date().getFullYear()}</div>
			</div>
		</>
	);
}

export default HomePage;
