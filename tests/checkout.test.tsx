import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import React from 'react';
import userEvent from '@testing-library/user-event';

import Checkout from '../src/components/Checkout';

describe('Checkout component', () => {
	test('Displays the form', () => {
		render(<Checkout />);
		expect(screen.getAllByRole('textbox')[0]).toBeVisible();
	});

	test('Has a submit button', () => {
		render(<Checkout />);
		expect(screen.getByText('Submit')).toBeVisible();
	});

	test("Submit button doesn't submit form when it is not valid", async () => {
		const user = userEvent.setup();
		render(<Checkout />);
		await user.click(screen.getByText('Submit'));
		await expect(screen.findByText('Submitted')).rejects.toThrowError();
	});

	test('Submit button submits the form if it is valid', async () => {
		const user = userEvent.setup();
		render(<Checkout />);
		await user.type(screen.getAllByRole('textbox')[0], '1234567890123456');
		await user.type(screen.getAllByRole('textbox')[1], '123');
		await user.type(screen.getAllByRole('textbox')[2], '12/23');
		await user.click(screen.getByText('Submit'));
		expect(await screen.findByText('Submitted')).toBeVisible();
	});
});
