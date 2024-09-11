import { describe, test, expect } from 'vitest';
import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';

import Store from '../src/components/Store';

describe('Store component', () => {
	test('Displays title', () => {
		render(<Store />);
		expect(screen.getByText('Store')).toBeVisible();
	});
	test('Fetches and displays store items', async () => {
		render(<Store />);
		await waitFor(() => {
			expect(screen.getAllByText(/Quantity/).length === 10);
		});
	});
});
