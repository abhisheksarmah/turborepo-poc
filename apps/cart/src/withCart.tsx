// withCart.js
import { CartContext } from "./context/CartContext";
import React from "react";

export default function withCart(Component) {
	return function fn(props) {
		return <CartContext.Consumer>{(context) => <Component {...props} {...context} />}</CartContext.Consumer>;
	};
}
