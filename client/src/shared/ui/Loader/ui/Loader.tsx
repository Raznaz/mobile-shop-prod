import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

export const Loader = () => {
	return (
		<div className='lds-spinner'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
