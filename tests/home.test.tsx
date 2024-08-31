import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '../src/components/Home';

describe('Home component', () => {
	it('Renders', () => {
		render(<Home />);
		screen.debug();
	});
	it('Has text elements', () => {
		render(<Home />);
		expect(screen.getByText('This is the Home page')).toBeVisible();
		expect(screen.getByText(/You can shop/i)).toBeVisible();
	});
});
