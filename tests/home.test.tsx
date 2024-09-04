import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '../src/components/Home';

describe('Home component', () => {
	test('Renders', () => {
		render(<Home />);
		screen.debug();
	});
	test('Has text elements', () => {
		render(<Home />);
		expect(screen.getByText('This is the Home page')).toBeVisible();
		expect(screen.getByText(/You can shop/i)).toBeVisible();
	});
});
