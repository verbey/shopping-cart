import { useEffect, useState } from 'react';
import ShoppingItem from './ShoppingItem';

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

function Store() {
	const [storeItems, setStoreItems] = useState<StoreData[] | null>(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

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
		<main>
			<h2>Store</h2>
			{loading && <p className='loadingText'>Loading...</p>}

			{storeItems && (
				<ul>
					{storeItems.map((item) => (
						<li key={item.id}>
							<ShoppingItem
								title={item.title}
								image={item.image}
								quantity={1}
								informationalOnly={false}
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
