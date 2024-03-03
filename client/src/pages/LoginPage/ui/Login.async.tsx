import { lazy } from 'react';

export const LoginAsync = lazy(
	() =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				//@ts-ignore
				resolve(import('./Login'));
			}, 500);
		})
);
