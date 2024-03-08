import { BugButton } from 'app/provider/ErrorBoundary';
import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar = () => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => setCollapsed((prev) => !prev);

	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}
		>
			<Button data-testid='sidebar-toggle' onClick={onToggle}>
				toggle
			</Button>

			<div className={cls.switchers}>
				<BugButton />
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
