import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import 'app/styles/index.scss';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import 'app/styles/index.scss';

render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById('root')
);
