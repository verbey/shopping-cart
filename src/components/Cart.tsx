import { useOutletContext, Navigate } from 'react-router-dom';
import ShoppingItem from './ShoppingItem';
import { useState } from 'react';

import styles from '../styles/cart.module.css';
import generalStyles from '../styles/infoComponent.module.css';

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

function Cart() {
	const [checkoutButtonState, setCheckoutButtonState] = useState(false);
	const [shoppingCartItems, setShoppingCartItems] =
		useOutletContext<ShoppingCartItemsContext>();
	const totalPrice = shoppingCartItems?.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.price * currentValue.quantity,
		0
	);
	const handleClick = () => {
		if (shoppingCartItems?.length) setCheckoutButtonState(true);
		return null;
	};
	return (
		<div className={styles.cartContainer}>
			<h2 className={generalStyles.title}>Cart</h2>
			<div className={styles.shoppingItemContainer}>
				{shoppingCartItems &&
					shoppingCartItems.map((item) => (
						<ShoppingItem
							key={item.title}
							title={item.title}
							image={item.image}
							quantity={item.quantity}
							price={item.price}
							informationalOnly={true}
						/>
					))}
			</div>
			<div className={styles.totalPrice}>Total: {totalPrice}</div>
			<button
				type='button'
				className={styles.checkoutButton}
				onClick={handleClick}
			>
				Checkout
			</button>
			<button
				type='button'
				className={styles.checkoutButton}
				onClick={() => setShoppingCartItems(null)}
			>
				Reset
			</button>
			{checkoutButtonState && <Navigate to='/cart/checkout' />}
		</div>
	);
}

export default Cart;
