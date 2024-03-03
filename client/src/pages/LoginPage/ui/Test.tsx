import cls from './Test.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface TestProps {
	className?: string;
}

export const Test = () => {
	return <div className={classNames('', {}, [])}>Test</div>;
};
