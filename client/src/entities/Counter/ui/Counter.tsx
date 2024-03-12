import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);
	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<h1>Counter</h1>
			<div> value : {counterValue}</div>
			<div>
				<Button theme={ButtonTheme.SECONDARY} onClick={increment}>
					+1 increment
				</Button>
			</div>
			<div>
				<Button theme={ButtonTheme.PRIMARY} onClick={decrement}>
					-1 decrement
				</Button>
			</div>
		</div>
	);
};
