import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/provider/StoreProvider';
import { fetchTodos, todoActions } from '../models/slice/todoSlice';

export const TodoList = () => {
	const allTodos = useSelector((state: StateSchema) => state.myTodo);
	const dispatch = useDispatch();

	const takeTodos = () => {
		dispatch(fetchTodos());
	};

	return (
		<div>
			<h1>TODO</h1>
			<div>
				<ul>
					{allTodos.map((todo) => {
						return <li key={todo.id}>{todo.title}</li>;
					})}
				</ul>
				<button type='button' onClick={takeTodos}>
					Go!
				</button>
			</div>
		</div>
	);
};
