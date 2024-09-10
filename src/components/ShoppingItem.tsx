import { useState } from 'react';

interface ShoppingItemProps {
	title: string;
	image?: string;
	quantity: number;
	informationalOnly: boolean;
	handleBuyButtonLogic?: () => void;
}

function ShoppingItem(props: ShoppingItemProps) {
	const [quantity, setQuantity] = useState(props.quantity);

	const handleIncreaseQuantityClick = () => {
		setQuantity(quantity + 1);
	};

	const handleDecreaseQuantityClick = () => {
		setQuantity(quantity - 1);
	};

	return (
		<div>
			<div className='shoppingItemTitlte'>{props.title}</div>
			{props.image && <img src={props.image} alt={props.title} />}
			<div className='quantity'>Quantity: {quantity}</div>
			{!props.informationalOnly && (
				<div className='quantityControlButtons'>
					<button
						className='increaseQuantity'
						onClick={handleIncreaseQuantityClick}
					>
						+
					</button>
					<button
						className='decreaseQuantity'
						onClick={handleDecreaseQuantityClick}
					>
						-
					</button>
				</div>
			)}
			{!props.informationalOnly && (
				<button
					className='buyButton'
					onClick={props.handleBuyButtonLogic}
				>
					Buy
				</button>
			)}
		</div>
	);
}

export default ShoppingItem;
