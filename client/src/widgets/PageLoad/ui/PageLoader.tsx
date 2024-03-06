import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import './PageLoader.scss';

export const PageLoader = () => {
	return (
		<div className={classNames('page-loader', {}, [])}>
			<Loader />
		</div>
	);
};
