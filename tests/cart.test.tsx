import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import React from 'react';

import Cart from '../src/components/Cart';

describe('Cart component', () => {
	test('Displays items if there are any', () => {
		render(
			<Cart
				shoppingCartItems={[
					{ title: 'Test Item', quantity: 1, price: 10 },
				]}
			/>
		);
		expect(screen.getByText('Test Item')).toBeInTheDocument();
	});
	test('Checkout button takes user to the checkout page', () => {
		// TODO
	});
});
