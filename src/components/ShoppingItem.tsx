import { useState } from 'react';

interface ShoppingCartItems {
	title: string;
	imageg?: string;
	quantity: number;
}

interface ShoppingItemProps {
	title: string;
	image?: string;
	quantity: number;
	informationalOnly: boolean;
	shoppingCartItems?: ShoppingCartItems[] | null;
	setShoppingCartItems?: (items: ShoppingCartItems[]) => void;
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
					onClick={() => {
						// That's a pretty cursed function but I'm not really sure how to simplify it
						// So I let it be. At least, for now. Instead, I'll explain weird moments briefly
						// how it works here, in the comments.
						if (props.setShoppingCartItems) {
							if (props.shoppingCartItems) {
								// Deduplication logic. Searches if an item with the same title is already
								// in the shopping cart items array
								if (
									props.shoppingCartItems.find(
										(item: ShoppingCartItems) =>
											item.title === props.title
									)
								) {
									// If it is, iterates over the array and increments the quantity
									props.setShoppingCartItems(
										props.shoppingCartItems.map((item) =>
											item.title === props.title
												? {
														...item,
														quantity:
															item.quantity +
															quantity,
												  }
												: item
										)
									);
								}
								// If it isn't, adds it to the shopping cart items array.
								else {
									props.setShoppingCartItems([
										...props.shoppingCartItems,
										{
											title: props.title,
											imageg: props.image,
											quantity: quantity,
										},
									]);
								}
							}
							// If shoppingCartItems is null, sets it with an array with 1 item
							else {
								props.setShoppingCartItems([
									{
										title: props.title,
										imageg: props.image,
										quantity: quantity,
									},
								]);
							}
						}
					}}
				>
					Buy
				</button>
			)}
		</div>
	);
}

export default ShoppingItem;
