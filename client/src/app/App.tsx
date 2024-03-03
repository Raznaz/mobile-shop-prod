import 'app/styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { useTheme } from './provider/ThemeProvider';
import { AppRouter } from './provider/router';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<NavBar />
			<AppRouter />
		</div>
	);
};

export default App;
