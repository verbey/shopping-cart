import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';

import ShoppingItem from '../src/components/ShoppingItem';

describe('ShoppingItem component. Informational only.', () => {
	test('Renders', () => {
		render(
			<ShoppingItem
				title='TestItem'
				quantity={1}
				price={10}
				informationalOnly={true}
			/>
		);
	});
	test('Has title', () => {
		render(
			<ShoppingItem
				title='TestItem'
				quantity={1}
				price={10}
				informationalOnly={true}
			/>
		);
		expect(screen.getByText('TestItem')).toBeVisible();
	});

	test('Has image', () => {
		render(
			<ShoppingItem
				title='TestItem'
				quantity={1}
				informationalOnly={true}
				price={10}
				image='https://picsum.photos/id/237/200/300'
			/>
		);
		expect(screen.getByAltText('TestItem')).toHaveAttribute(
			'src',
			'https://picsum.photos/id/237/200/300'
		);
	});

	test('Displays quantity', () => {
		render(
			<ShoppingItem
				title='TestItem'
				quantity={1}
				informationalOnly={true}
				price={10}
			/>
		);
		expect(screen.getByText('Quantity: 1')).toBeVisible();
	});

	test('Displays price', () => {
		render(
			<ShoppingItem
				title='TestItem'
				quantity={1}
				price={10}
				informationalOnly={true}
			/>
		);
		expect(screen.getByText('Price: 10')).toBeVisible();
	});
});

describe('ShoppingItem component. Not informational only.', () => {
	test('Should call handleBuyButton when clicked', async () => {
		const handleBuyButton = vi.fn();
		const user = userEvent.setup();
		render(
			<ShoppingItem
				title='TestItem'
				quantity={1}
				price={10}
				informationalOnly={false}
				shoppingCartItems={null}
				setShoppingCartItems={handleBuyButton}
			/>
		);

		const buyBuyButton = screen.getByText('Buy');

		await user.click(buyBuyButton);

		expect(handleBuyButton).toHaveBeenCalled();
	});

	test('Should increase quantity when the user clicks the + button', async () => {
		const user = userEvent.setup();
		render(
			<ShoppingItem
				title='TestItem'
				quantity={1}
				price={10}
				informationalOnly={false}
			/>
		);

		const increaseButton = screen.getByText('+');

		await user.click(increaseButton);

		expect(screen.getByText('Quantity: 2')).toBeVisible();
	});

	test('Should decrease quantity when the user clicks the - button', async () => {
		const user = userEvent.setup();
		render(
			<ShoppingItem
				title='TestItem'
				quantity={2}
				price={10}
				informationalOnly={false}
			/>
		);

		const decreaseButton = screen.getByText('-');

		await user.click(decreaseButton);

		expect(screen.getByText('Quantity: 1')).toBeVisible();
	});
});
