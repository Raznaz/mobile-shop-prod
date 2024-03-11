import MyLogo from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import SearchIcon from 'shared/assets/icons/search_icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import Login from 'pages/LoginPage/ui/Login';

interface NavBarProps {
	className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
	const { t } = useTranslation('translation');
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, [isAuthModal]);

	return (
		<header className={classNames(cls.header)}>
			<div className={cls.container}>
				<div className={cls.inner}>
					<div className={cls['logo-container']}>
						<AppLink to='/'>
							<MyLogo className={cls.logo} height='100' width='100' />
						</AppLink>
					</div>

					<ul className={classNames(cls['user-actions'])}>
						<li className={classNames(cls['user-actions__item'])}>
							<Button theme={ButtonTheme.PRIMARY} onClick={onToggleModal}>
								{' '}
								{t('Login')}{' '}
							</Button>
							<Modal isOpen={isAuthModal} onClose={onToggleModal}>
								<div>
									<Login />
								</div>
							</Modal>
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
