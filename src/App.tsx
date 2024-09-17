import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

interface ShoppingCartItems {
	title: string;
	image?: string;
	quantity: number;
}

function App() {
	const [shoppingCartItems, setShoppingCartItems] = useState<
		ShoppingCartItems[] | null
	>(null);

	let shoppingCartItemsNumber = 0;
	if (shoppingCartItems !== null) {
		shoppingCartItemsNumber = shoppingCartItems.reduce(
			(accumulator, currentValue) => accumulator + currentValue.quantity,
			0
		);
	}

	return (
		<>
			<Navbar shoppingCartItems={shoppingCartItemsNumber} />
			<Outlet
				context={
					[shoppingCartItems, setShoppingCartItems] as [
						ShoppingCartItems[] | null,
						(items: ShoppingCartItems[] | null) => void
					]
				}
			/>
		</>
	);
}

export default App;
