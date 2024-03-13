import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { todoReducer } from 'entities/ToDo/models/slice/todoSlice';

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: { counter: counterReducer, myTodo: todoReducer },
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
