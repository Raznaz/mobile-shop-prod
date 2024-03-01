import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './classNames/classNames';

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
			<Suspense fallback={<div>🐾Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
