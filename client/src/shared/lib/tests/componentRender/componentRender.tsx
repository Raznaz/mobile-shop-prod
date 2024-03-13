import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18n';

export interface renderWithRouterOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
}

export function componentRender(
	component: ReactNode,
	options: renderWithRouterOptions = {}
) {
	const { route = '/', initialState } = options;

	return render(
		// <StoreProvider initialState={initialState}>
		// 	<MemoryRouter initialEntries={[route]}>
		// 		<Suspense fallback=''>
		// 			<I18nextProvider i18n={i18n}>{component}</I18nextProvider>
		// 		</Suspense>
		// 	</MemoryRouter>
		// </StoreProvider>

		<StoreProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
		</StoreProvider>
	);
}
