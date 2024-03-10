import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './SideBar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import HomeIcon from 'shared/assets/icons/home_icon.svg';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import { useTranslation } from 'react-i18next';

interface SideBarProps {
	className?: string;
}

export const SideBar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation('translation');

	const onToggle = () => setCollapsed((prev) => !prev);

	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}
		>
			<Button
				className={classNames(cls.sidebar__btn)}
				data-testid='sidebar-toggle'
				onClick={onToggle}
				theme={ButtonTheme.BACKGROUND}
				// square
				size={ButtonSize.XL}
			>
				{collapsed ? '>>>' : '<<<'}
			</Button>
			<nav className={classNames(cls.navbar)}>
				<ul className={classNames(cls.navbar__list, { dark: true })}>
					<li className={classNames(cls.navbar__item)}>
						<AppLink to='/' className={cls.navbar__link}>
							{collapsed ? (
								<HomeIcon />
							) : (
								<span>
									<HomeIcon />
									{t('Main')}
								</span>
							)}
						</AppLink>
					</li>
					<li className={classNames(cls.navbar__item)}>
						<AppLink to='/about' className={cls.navbar__link}>
							{collapsed ? (
								<AboutIcon width={48} height={48} />
							) : (
								<span>
									<AboutIcon width={48} height={48} />
									{t('About')}
								</span>
							)}
						</AppLink>
					</li>
				</ul>
			</nav>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} shortName />
			</div>
		</div>
	);
};
