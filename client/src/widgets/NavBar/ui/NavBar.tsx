import MyLogo from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import SearchIcon from 'shared/assets/icons/search_icon.svg';

interface NavBarProps {
	className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
	return (
		<header className={classNames(cls.header)}>
			<div className={cls.container}>
				<div className={cls.inner}>
					<div className={cls['logo-container']}>
						<AppLink to='/'>
							<MyLogo className={cls.logo} height='100' width='100' />
						</AppLink>
					</div>

					{/* <nav className={classNames(cls.navbar)}>
						<ul className={classNames(cls.navbar__list, { dark: true })}>
							<li className={classNames(cls.navbar__item)}>
								<AppLink to='/' className={cls.navbar__link}>
									Main
								</AppLink>
							</li>
							<li className={classNames(cls.navbar__item)}>
								<AppLink to='/about' className={cls.navbar__link}>
									About
								</AppLink>
							</li>
						</ul>
					</nav> */}
					<ul className={classNames(cls['user-actions'])}>
						<li className={classNames(cls['user-actions__item'])}>
							<AppLink to='/login' theme={AppLinkTheme.SECONDARY}>
								Login
							</AppLink>
						</li>
						<li className={classNames(cls['user-actions__item'])}>
							<AppLink to='/' theme={AppLinkTheme.SECONDARY}>
								Cart
							</AppLink>
						</li>
						<li className={classNames(cls['user-actions__item'], {}, ['search-icon'])}>
							<AppLink to='/search' theme={AppLinkTheme.SECONDARY}>
								<SearchIcon />
							</AppLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
