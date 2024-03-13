import { StateSchema } from 'app/provider/StoreProvider';
import { getCounter } from './getCounter';
import { DeepPartial } from '@reduxjs/toolkit';

describe('Get Counter selector', () => {
	test('Should return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 111 },
		};
		expect(getCounter(state as StateSchema)).toEqual({ value: 111 });
	});
});
