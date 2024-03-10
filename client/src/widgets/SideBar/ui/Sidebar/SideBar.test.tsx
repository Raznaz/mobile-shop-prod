/* eslint-disable max-len */
import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('SideBar component', () => {
	test('Sidebar component', () => {
		// // renderWithTranslation(<SideBar />);
		componentRender(<SideBar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggle Sidebar', () => {
		// renderWithTranslation(<SideBar />);
		componentRender(<SideBar />);
		const toggleButton = screen.getByTestId('sidebar-toggle');
		fireEvent.click(toggleButton);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
