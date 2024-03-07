import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

export const PageError = () => {
	const { t } = useTranslation('translation');

	const refreshPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div className={classNames(cls['page-error'], {}, [])}>
			{t('Unexpected error')}
			<Button onClick={refreshPage}>{t('Refresh page')}</Button>
		</div>
	);
};
