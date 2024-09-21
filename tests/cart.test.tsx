import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import React from 'react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';

import Cart from '../src/components/Cart';

interface RenderRouteWithOutletContextProps<T = ShoppingCartItemsContext> {
	context: T;
	children: React.ReactNode;
}

const RenderRouteWithOutletContext = <T,>({
	context,
	children,
}: RenderRouteWithOutletContextProps<T>) => {
	return (
		<MemoryRouter>
			<Routes>
				<Route path='/' element={<Outlet context={context as T} />}>
					<Route index element={children} />
				</Route>
			</Routes>
		</MemoryRouter>
	);
};

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

describe('Cart component', () => {
	test('Displays items if there are any', () => {
		const mockOutletContextData: ShoppingCartItemsContext = [
			[{ title: 'Test Item', quantity: 1, price: 10 }],
			() => {},
		];

		render(
			<RenderRouteWithOutletContext context={mockOutletContextData}>
				<Cart />
			</RenderRouteWithOutletContext>
		);
		expect(screen.getByText('Test Item')).toBeInTheDocument();
	});
	test('Checkout button takes user to the checkout page', () => {
		// TODO
	});
});
