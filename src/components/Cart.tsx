import { useOutletContext } from 'react-router-dom';
import ShoppingItem from './ShoppingItem';

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
	const [shoppingCartItems] = useOutletContext<ShoppingCartItemsContext>();
	const totalPrice = shoppingCartItems?.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.price * currentValue.quantity,
		0
	);
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
			<button type='button' className={styles.checkoutButton}>
				Checkout
			</button>
		</div>
	);
}

export default Cart;
