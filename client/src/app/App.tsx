import 'app/styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { useTheme } from './provider/ThemeProvider';
import { AppRouter } from './provider/router';
import { SideBar } from 'widgets/SideBar';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<NavBar />
			<div className='content-page'>
				<SideBar />
				<AppRouter />
			</div>
		</div>
	);
};

export default App;
