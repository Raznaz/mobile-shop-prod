import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './BugButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useEffect, useState } from 'react';

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
			theme={ButtonTheme.PRIMARY}
			onClick={throwError}
			className={classNames('', {}, [])}
		>
			throw error
		</Button>
	);
};
