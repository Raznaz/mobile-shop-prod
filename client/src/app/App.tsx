import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from 'pages/AboutPage/ui/AboutPage.async';
import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async';
import 'app/styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './provider/ThemeProvider';
import AboutPage from 'pages/AboutPage/ui/AboutPage';
import MainPage from 'pages/MainPage/ui/MainPage';

const App = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<div className={classNames('app', { test1: true, test2: false }, [theme])}>
			<div>
				<button role='button' onClick={toggleTheme}>
					Change theme
				</button>
			</div>

			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback={<div>⏲️Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPage />} />
					<Route path={'/'} element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
