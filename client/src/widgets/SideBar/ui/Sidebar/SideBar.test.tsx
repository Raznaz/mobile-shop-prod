/* eslint-disable max-len */
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('SideBar component', () => {
	test('Sidebar component', () => {
		renderWithTranslation(<SideBar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggle Sidebar', () => {
		renderWithTranslation(<SideBar />);
		const toggleButton = screen.getByTestId('sidebar-toggle');
		fireEvent.click(toggleButton);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
