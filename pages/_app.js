import Layout from '../components/Layout';
import indec from '../pages/index';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
