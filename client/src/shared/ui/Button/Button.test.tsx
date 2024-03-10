import { Button, ButtonTheme } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button component', () => {
	test('show btn', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('check theme', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST BUTTON</Button>);
		expect(screen.getByText('TEST BUTTON')).toHaveClass('clear');
	});
});
