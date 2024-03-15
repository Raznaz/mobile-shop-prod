import { MyAboutPage } from 'pages/AboutPage';
import { MyLogin } from 'pages/LoginPage';
import { MyMainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PhoneBook } from 'pages/PhoneBook';
import { RouteProps } from 'react-router-dom';

export enum AppRouters {
	MAIN = 'main',
	ABOUT = 'about',
	LOGIN = 'login',
	PHONE_BOOK = 'phone_book',
	NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRouters, string> = {
	[AppRouters.MAIN]: '/',
	[AppRouters.ABOUT]: '/about',
	[AppRouters.LOGIN]: '/login',
	[AppRouters.PHONE_BOOK]: '/phone_book',
	[AppRouters.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouters, RouteProps> = {
	[AppRouters.MAIN]: { path: RouterPath.main, element: <MyMainPage /> },
	[AppRouters.ABOUT]: { path: RouterPath.about, element: <MyAboutPage /> },
	[AppRouters.LOGIN]: { path: RouterPath.login, element: <MyLogin /> },
	[AppRouters.PHONE_BOOK]: { path: RouterPath.phone_book, element: <PhoneBook /> },
	[AppRouters.NOT_FOUND]: {
		path: RouterPath.not_found,
		element: <NotFoundPage />,
	},
};
