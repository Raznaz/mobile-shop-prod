import { useState } from 'react';
// import './Counter.scss';
import classes from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	const decrement = () => {
		setCount((prev) => prev - 1);
	};

	return (
		<>
			<div>
				<button className={classes.btn1} role='button' onClick={increment}>
					increase
				</button>
				<button className={classes.btn2} role='button' onClick={decrement}>
					decrease
				</button>
			</div>
			<div>
				<h1>{count}</h1>
			</div>
		</>
	);
};
