import { useState } from "react";

export const useCart = () => {
	const [count, setCount] = useState(0);

	console.log("counter", count);

	function setCounter() {
		console.log("coming here");
		setCount((count) => (count = count + 1));
	}

	return {
		setCounter,
		getCounter: count,
	};
};
