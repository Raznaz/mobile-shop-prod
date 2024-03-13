import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TodoSchema } from '../types/todoSchema';

const initialState: TodoSchema[] = [];
// const initialState: TodoSchema[] = [
// 	{ id: 33, text: 'my text', completed: false },
// 	{ id: 1, text: 'JOker', completed: false },
// 	{ id: 2, text: 'smoke is the best player', completed: false },
// ];

export const fetchTodos = createAsyncThunk('todos/fetchAllTodos', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
	const data = response.json();
	return data;
});

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		getTodoList: (state, actions) => {
			return [...state, ...actions.payload];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTodos.fulfilled, (state, actions) => {
			console.log('❎payload ', actions.payload);
			return [...state, ...actions.payload];
		});
	},
});

export const { actions: todoActions, reducer: todoReducer } = todoSlice;
