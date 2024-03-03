import { MyAboutPage } from 'pages/AboutPage';
import { MyLogin } from 'pages/LoginPage';
import { MyMainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum AppRouters {
	MAIN = 'main',
	ABOUT = 'about',
	LOGIN = 'login',
}

export const RouterPath: Record<AppRouters, string> = {
	[AppRouters.MAIN]: '/',
	[AppRouters.ABOUT]: '/about',
	[AppRouters.LOGIN]: '/login',
};

export const routeConfig: Record<AppRouters, RouteProps> = {
	[AppRouters.MAIN]: { path: RouterPath.main, element: <MyMainPage /> },
	[AppRouters.ABOUT]: { path: RouterPath.about, element: <MyAboutPage /> },
	[AppRouters.LOGIN]: { path: RouterPath.login, element: <MyLogin /> },
};
