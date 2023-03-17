import DetailPage from 'pages/DetailPage';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{
				path: '/issue/:number',
				element: <DetailPage />,
			},
		],
	},
]);

export default router;
