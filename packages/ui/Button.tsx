import * as React from "react";
export const Button = ({ onClick }: { onClick: () => void }) => {
	return (
		<button className="bg-red-300 px-4 py-2 rounded-lg" onClick={onClick}>
			Boop
		</button>
	);
};
