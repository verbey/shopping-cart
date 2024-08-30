import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Navbar from '../src/components/Navbar';

describe('Navbar component', () => {
	test('Renders', () => {
		render(<Navbar />);

		screen.debug();
	});
});
