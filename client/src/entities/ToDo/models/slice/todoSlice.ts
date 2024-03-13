import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TodoSchema } from '../types/todoSchema';

const initialState: TodoSchema[] = [];

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
			return [...state, ...actions.payload];
		});
	},
});

export const { actions: todoActions, reducer: todoReducer } = todoSlice;
