import { useTheme } from 'app/provider/ThemeProvider';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

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
						<AppLink to={'/'}>
							<img src='images/logo.svg' alt='logo' />
						</AppLink>
						<button role='button' onClick={toggleTheme}>
							Change theme
						</button>
					</div>

					<nav className={classNames(cls.navbar)}>
						<ul className={classNames(cls.navbar__list, { dark: true })}>
							<li className={classNames(cls.navbar__item)}>
								<AppLink to={'/'} className={cls.navbar__link}>
									Main
								</AppLink>
							</li>
							<li className={classNames(cls.navbar__item)}>
								<AppLink to={'/about'} className={cls.navbar__link}>
									About
								</AppLink>
							</li>
						</ul>
					</nav>
					<ul className={classNames(cls['user-actions'])}>
						<li className={classNames(cls['user-actions__item'])}>
							<AppLink to={'/login'} theme={AppLinkTheme.SECONDARY}>
								Login
							</AppLink>
						</li>
						<li className={classNames(cls['user-actions__item'])}>
							<AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
								Cart
							</AppLink>
						</li>
						<li className={classNames(cls['user-actions__item'])}>
							<AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
								Search
							</AppLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
