import App from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from '../../i18n'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
    return (
		<>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png"/>
				<link rel="manifest" href="/images/favicons/site.webmanifest"/>
				<link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ffffff"/>
				<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"/>
				<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
			</Head>
        	<Component {...pageProps} />
		</>
	);
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext)
	return { ...appProps }
}

export default appWithTranslation(MyApp)
