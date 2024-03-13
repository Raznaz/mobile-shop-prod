import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import { StateSchema } from 'app/provider/StoreProvider';

describe('getCounterValue.test ', () => {
	test('Should getCounterValue.test', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		};
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	});
});
