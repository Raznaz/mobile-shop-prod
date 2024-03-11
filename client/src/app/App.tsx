import { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useTheme } from './provider/ThemeProvider';
import { AppRouter } from './provider/router';
import { Modal } from 'shared/ui/Modal/ui/Modal';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<NavBar />
				<div className='content-page'>
					<SideBar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
