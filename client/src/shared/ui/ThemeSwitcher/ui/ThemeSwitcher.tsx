import { Theme, useTheme } from 'app/provider/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/dark_icon.svg';
import LightIcon from 'shared/assets/icons/light_icon.svg';
import { Button, ThemeButton } from 'shared/ui/Button.tsx/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			role='button'
			className={classNames(`${cls['theme-switcher']}, ${cls.btn}`, {}, [])}
			onClick={toggleTheme}
		>
			<div className={cls.test}>{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}</div>
		</Button>
	);
};