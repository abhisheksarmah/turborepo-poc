import { createContext, ReactNode, useContext } from "react";
import { useCart } from "./hooks/useCart";

type CartContextType = {
	cart: {
		setCounter: () => void;
		getCounter: number;
	};
};

const cartContextDefaultValues: CartContextType = {
	cart: {
		setCounter: () => {},
		getCounter: 0,
	},
};

export const CartContext = createContext<CartContextType>(cartContextDefaultValues);

export function useCartContext() {
	return useContext(CartContext);
}

type Props = {
	children: ReactNode;
};

export function CartContextProvider({ children }: Props) {
	const value = {
		cart: {
			...useCart(),
		},
	};

	return (
		<>
			<CartContext.Provider value={value}>{children}</CartContext.Provider>
		</>
	);
}
