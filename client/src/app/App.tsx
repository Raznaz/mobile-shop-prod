import 'app/styles/index.scss';
import { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useTheme } from './provider/ThemeProvider';
import { AppRouter } from './provider/router';
import { Modal } from 'shared/ui/Modal/ui/Modal';

const App = () => {
	const { theme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<NavBar />
				<button type='button' onClick={() => setIsOpen(true)}>
					Modal
				</button>
				{/* <Modal isOpen={isOpen} onClose={() => setIsOpen} /> */}
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi neque
						minima reiciendis ipsa, esse laudantium libero enim odit asperiores iusto
						quisquam, voluptatem maxime unde temporibus quam accusamus similique aliquid.
					</div>
				</Modal>
				<div className='content-page'>
					<SideBar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
