import React from "react";

import { AppProps } from "next/app";
import "../styles/globals.css";
import { CartContextProvider } from "../src/context/CartContext";
import Header from "main/src/components/Header";

const MyApp = ({ Component, pageProps }: AppProps) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<CartContextProvider>
		<Header />
		<Component {...pageProps} />
	</CartContextProvider>
);

export default MyApp;
