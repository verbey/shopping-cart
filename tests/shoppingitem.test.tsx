import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import ShoppingItem from '../src/components/ShoppingItem';

describe('ShoppingItem component. Informational only.', () => {
	test('Renders', () => {
		render(
			<ShoppingItem
				title='TestItem'
				quantity={1}
				informationalOnly={true}
			/>
		);
	});
	test('Has title', () => {
		render(
			<ShoppingItem
				title='TestItem'
				quantity={1}
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
			/>
		);
		expect(screen.getByText('Quantity: 1')).toBeVisible();
	});
});
