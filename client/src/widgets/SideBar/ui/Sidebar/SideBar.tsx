import { useState } from 'react';
import cls from './SideBar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button.tsx/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { BugButton } from 'app/provider/ErrorBoundary';

interface SideBarProps {
	className?: string;
}

export const SideBar = () => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => setCollapsed((prev) => !prev);

	return (
		<div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}>
			<Button onClick={onToggle}>toggle</Button>

			<div className={cls.switchers}>
				<BugButton />
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
