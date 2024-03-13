import { CounterSchema } from 'entities/Counter';
import { TodoSchema } from 'entities/ToDo/models/types/todoSchema';

export interface StateSchema {
	counter: CounterSchema;
	myTodo: TodoSchema[];
}
