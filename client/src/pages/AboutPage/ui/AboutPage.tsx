import { TodoList } from 'entities/ToDo/ui/TodoList';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t } = useTranslation('about');
	document.title = t('about');

	return (
		<div>
			<h1 className='dark'>{t('about')}</h1>
			<h2>{t('Chapter')}</h2>
			<div>
				<TodoList />
			</div>
		</div>
	);
};

export default AboutPage;
