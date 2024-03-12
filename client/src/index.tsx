import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { StoreProvider } from 'app/provider/StoreProvider';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import 'app/styles/index.scss';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import App from './app/App';

render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>,

	document.getElementById('root')
);
