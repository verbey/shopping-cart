import { useEffect, useState } from 'react';
import ShoppingItem from './ShoppingItem';
import { useOutletContext } from 'react-router-dom';
import styles from '../styles/store.module.css';

interface StoreData {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		count: number;
		rate: number;
	};
}

interface ShoppingCartItems {
	title: string;
	image?: string;
	quantity: number;
	price: number;
}

type ShoppingCartItemsContext = [
	ShoppingCartItems[] | null,
	(items: ShoppingCartItems[] | null) => void
];

function Store() {
	const [storeItems, setStoreItems] = useState<StoreData[] | null>(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [shoppingCartItems, setShoppingCartItems] =
		useOutletContext<ShoppingCartItemsContext>();

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=10', { mode: 'cors' })
			.then((response) => response.json())
			.then((response) => {
				setStoreItems(response);
			})
			.catch((error) => {
				console.log(error);
				setError(error);
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<main className={styles.storeContainer}>
			<h2>Store</h2>
			{loading && <p className='loadingText'>Loading...</p>}

			{storeItems && (
				<ul className={styles.storeItemsList}>
					{storeItems.map((item) => (
						<li key={item.id}>
							<ShoppingItem
								title={item.title}
								image={item.image}
								quantity={1}
								price={item.price}
								informationalOnly={false}
								shoppingCartItems={shoppingCartItems}
								setShoppingCartItems={setShoppingCartItems}
							/>
						</li>
					))}
				</ul>
			)}

			{error && (
				<p className='errorText'>
					Failed to load store items. See the console for more
					information.
				</p>
			)}
		</main>
	);
}

export default Store;
