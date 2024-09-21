import { useOutletContext } from 'react-router-dom';
import ShoppingItem from './ShoppingItem';

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
		<div className='cartContainer'>
			<div className='cartItems'>
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
			<div className='totalPrice'>Total: {totalPrice}</div>
			<button type='button'>Checkout</button>
		</div>
	);
}

export default Cart;
