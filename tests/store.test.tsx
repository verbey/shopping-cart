import { describe, test, expect } from 'vitest';
import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';

import Store from '../src/components/Store';

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

describe('Store component', () => {
	test('Displays title', () => {
		const mockOutletContextData: ShoppingCartItemsContext = [
			null,
			() => {},
		];

		render(
			<RenderRouteWithOutletContext context={mockOutletContextData}>
				<Store />
			</RenderRouteWithOutletContext>
		);
		expect(screen.getByText('Store')).toBeVisible();
	});
	test('Fetches and displays store items', async () => {
		const mockOutletContextData: ShoppingCartItemsContext = [
			null,
			() => {},
		];

		render(
			<RenderRouteWithOutletContext context={mockOutletContextData}>
				<Store />
			</RenderRouteWithOutletContext>
		);
		await waitFor(() => {
			expect(screen.getAllByText(/Quantity/).length === 10);
		});
	});
});
