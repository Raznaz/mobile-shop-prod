import { Button, ThemeButton } from 'shared/ui/Button.tsx/Button';
import cls from './BugButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';

export const BugButton = () => {
	const [error, setError] = useState(false);

	const throwError = () => setError((prev) => !prev);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={throwError}
			className={classNames('', {}, [])}
		>
			throw error
		</Button>
	);
};
