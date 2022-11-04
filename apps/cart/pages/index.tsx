import Link from "next/link";
import { Button } from "ui";
import { useCartContext } from "../src/context/CartContext";

export default function Cart() {
	const {
		cart: { getCounter, setCounter },
	} = useCartContext();
	return (
		<>
			Current count is {getCounter}
			<h1>This is the cart page</h1>
			<Link href="/">Go to Home</Link>
			<Button
				onClick={() => {
					console.log("getting called");
					setCounter();
				}}
			/>
		</>
	);
}
