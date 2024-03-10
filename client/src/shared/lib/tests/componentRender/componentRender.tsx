import { render } from '@testing-library/react';
import { ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18n';

export interface renderWithRouterOptions {
	route?: string;
}

export function componentRender(
	component: ReactNode,
	options: renderWithRouterOptions = {}
) {
	const { route = '/' } = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			{/* <Suspense fallback=''>
				<I18nextProvider i18n={i18n}>
				</I18nextProvider>
			</Suspense> */}

			{component}
		</MemoryRouter>
	);
}
