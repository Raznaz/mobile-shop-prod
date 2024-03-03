import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';

interface NavBarProps {
	className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className={classNames(cls.header)}>
			<div className={cls.container}>
				<div className={cls.inner}>
					<div>
						<Link to={'/'}>
							<img src='images/logo.svg' alt='logo' />
						</Link>
						<button role='button' onClick={toggleTheme}>
							Change theme
						</button>
					</div>

					<nav className={classNames(cls.navbar)}>
						<ul className={classNames(cls.navbar__list, { dark: true })}>
							<li className={classNames(cls.navbar__item)}>
								<Link to={'/'}>Main</Link>
							</li>
							<li className={classNames(cls.navbar__item)}>
								<Link to={'/about'}>About</Link>
							</li>
						</ul>
					</nav>
					<ul className={classNames(cls['user-actions'])}>
						<li className={classNames(cls['user-actions__item'])}>
							<Link to={'/login'}>Login</Link>
						</li>
						<li className={classNames(cls['user-actions__item'])}>
							<Link to={'/'}>Cart</Link>
						</li>
						<li className={classNames(cls['user-actions__item'])}>
							<Link to={'/'}>Search</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
