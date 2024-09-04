import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../src/components/Navbar';

describe('Navbar component', () => {
	test('Renders', () => {
		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		);

		expect(screen.getByText('404 Store')).toBeVisible();
	});
	test('Has link elements', () => {
		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		);
		expect(screen.getByText('Home')).toHaveAttribute('href', '/');
		expect(screen.getByText('Store')).toHaveAttribute('href', '/store');
		expect(screen.getByText('Cart')).toHaveAttribute('href', '/cart');
		expect(screen.getByText('About')).toHaveAttribute('href', '/about');
	});
});
