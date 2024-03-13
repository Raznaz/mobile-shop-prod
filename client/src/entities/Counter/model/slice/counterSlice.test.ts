import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test ', () => {
	const state: CounterSchema = {
		value: 123,
	};

	test('Should counterSlice.test decrement', () => {
		expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({
			value: 122,
		});
	});

	test('Should counterSlice.test increment', () => {
		expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({
			value: 124,
		});
	});

	test('Should counterSlice.test EMPTY STATE', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({
			value: 1,
		});
	});
});
