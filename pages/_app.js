import Layout from '../components/Layout/Layout';
import indec from '../pages/index';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
