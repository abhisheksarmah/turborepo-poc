import React from "react";

import { AppProps } from "next/app";
import Header from "../src/components/Header";
import "../styles/globals.css";
import { CartContextProvider } from "cart/src/context/CartContext";

const MyApp = ({ Component, pageProps }: AppProps) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<CartContextProvider>
		<Header />
		<Component {...pageProps} />
	</CartContextProvider>
);

export default MyApp;
