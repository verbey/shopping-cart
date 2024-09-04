import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import About from '../src/components/About';

describe('About component', () => {
	test('Renders', () => {
		render(<About />);
		screen.debug();
	});
	test('Has text elements', () => {
		render(<About />);
		expect(screen.getByText('About')).toHaveRole('heading');
		expect(screen.getByText('This is the About page')).toBeVisible();
		expect(screen.getByText(/A project to practice/i)).toBeVisible();
	});
});
