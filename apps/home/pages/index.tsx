import Link from "next/link";
import { Button } from "ui";

export default function Home() {
	return (
		<div>
			<h1>This is the home page</h1>
			<Button />
			<Link href="/cart">Go to Cart</Link>
		</div>
	);
}
