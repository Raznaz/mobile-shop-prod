import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Counter.test ', () => {
	test('Should Counter.test', () => {
		componentRender(<Counter />, { initialState: { counter: { value: 100 } } });
		expect(screen.getByTestId('value-counter')).toHaveTextContent('100');
	});

	test('should increment', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 50,
				},
			},
		});

		const incrementBtn = screen.getByTestId('increment-btn');
		fireEvent.click(incrementBtn);

		expect(screen.getByTestId('value-counter')).toHaveTextContent('51');
	});

	test('should decrementBtn', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 50,
				},
			},
		});

		const decrementBtn = screen.getByTestId('decrement-btn');
		fireEvent.click(decrementBtn);

		expect(screen.getByTestId('value-counter')).toHaveTextContent('49');
	});
});
