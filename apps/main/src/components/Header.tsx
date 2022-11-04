import Link from "next/link";
import withCart from "cart/src/withCart";

function Header({ cart: { getCounter } }) {
	console.log("cart", getCounter);
	return (
		<div className="p-5 bg-blue-500 text-white text-3xl font-bold">
			<div className="flex">
				<div className="flex-grow flex">
					<Link href="/">Monorepo POC</Link>
					<div className="mx-5">|</div>
					<Link id="cart" href="/cart">
						Cart {getCounter}
					</Link>
				</div>
				<div className="flex-end relative">Login</div>
			</div>
		</div>
	);
}

const HeaderWithCart = withCart(Header);
export default HeaderWithCart;
