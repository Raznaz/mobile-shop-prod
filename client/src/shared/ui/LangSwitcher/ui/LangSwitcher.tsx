import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import React from 'react';

interface LangSwitcherProps {
	className?: string;
	shortName?: boolean;
}

export const LangSwitcher = ({ className, shortName }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation('translation');

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			onClick={toggleLang}
			className={classNames('', {}, [className])}
		>
			{t(shortName ? 'shortLanguageName' : 'languageName')}
		</Button>
	);
};
