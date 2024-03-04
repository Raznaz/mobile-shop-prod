import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation('mainPage');
	document.title = t('Main page');
	return (
		<div className='dark'>
			<h1>{t('Main page')}</h1>
		</div>
	);
};

export default MainPage;
