import { Fragment, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from '../components/context/AuthContext';
import '../styles/page.module.css';

function MyApp(props) {
	const { Component, pageProps } = props;
	useEffect(() => {

		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles && jssStyles.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const muiTheme = createTheme();

	return (
		<Fragment>
			<Head>
				<title>full-stack</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<AuthProvider>
				<ThemeProvider theme={muiTheme}>

					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</AuthProvider>
		</Fragment>
	);
}

export default MyApp;
