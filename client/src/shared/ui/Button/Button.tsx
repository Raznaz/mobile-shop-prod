import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
	L = 'size_l',
	M = 'size_m',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: string;
}

export const Button: FC<ButtonProps> = (props) => {
	const { children, className, theme, square, size, ...otherProps } = props;

	const mods: Record<string, boolean> = {
		[cls[theme]]: true,
		[cls.square]: square,
	};

	return (
		<button
			type='button'
			className={classNames(cls.btn, mods, [className, cls[theme], cls[size]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
