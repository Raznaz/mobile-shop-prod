import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const { children, className, theme, ...otherProps } = props;
	return (
		<button
			type='button'
			className={classNames(cls.btn, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
