import { TodoList } from 'entities/ToDo/ui/TodoList';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t } = useTranslation('about');
	document.title = t('about');
	const [some, setSome] = useState('');

	useEffect(() => {
		const checkAuth = async () => {
			const response = await fetch('http://localhost:5000/api/user/auth?id=34');
			const t = await response.json();
			console.log('❎response ', t);
			setSome(t.auth);
		};

		checkAuth();
	}, []);

	return (
		<div>
			<h1 className='dark'>{t('about')}</h1>
			<h2>{t('Chapter')}</h2>
			<h3>{some}</h3>
			<div>
				<TodoList />
			</div>
		</div>
	);
};

export default AboutPage;
