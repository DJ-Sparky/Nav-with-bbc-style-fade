import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import '../styles/app.css';
import '../styles/globals.scss';

console.log(
	'%c Get your own code!',
	'font-size: 50px; text-transform: uppercase; color: white; text-shadow: 2px 2px red, 4px 4px orange, 6px 6px yellow, 8px 8px green, 10px 10px blue, 12px 12px purple;'
);

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<meta
						name='viewport'
						content='width=device-width,initial-scale=1.0'
					/>
					<link href='/dist/output.css' rel='stylesheet'></link>
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</>
		);
	}
}

export default MyApp;
