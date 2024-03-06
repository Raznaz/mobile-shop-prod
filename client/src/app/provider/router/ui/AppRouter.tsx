import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfg';
import { PageLoader } from 'widgets/PageLoad';

const AppRouter = () => {
	return (
		// <Suspense fallback={<PageLoader />}>
		<Routes>
			{Object.values(routeConfig).map(({ path, element }) => {
				return (
					<Route
						key={path}
						path={path}
						element={
							<Suspense fallback={<PageLoader />}>
								<div className='page-wrapper'>{element}</div>
							</Suspense>
						}
					/>
				);
			})}
		</Routes>
		// </Suspense>
	);
};

export default AppRouter;
