import { useState } from 'react';
import cls from './SideBar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button.tsx/Button';

interface SideBarProps {
	className?: string;
}

export const SideBar = () => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => setCollapsed((prev) => !prev);

	return (
		<div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}>
			<button onClick={onToggle}>toggle</button>

			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};
