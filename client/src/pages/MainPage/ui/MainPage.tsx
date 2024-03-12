import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation('mainPage');
	document.title = t('Main page');
	return (
		<div className='dark'>
			<h1>{t('Main page')}</h1>
			<div>
				<h2>Counter</h2>
				<div>
					<Counter />
				</div>
			</div>
		</div>
	);
};

export default MainPage;
