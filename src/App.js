import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/Routing';
import { store } from 'store/@store';
import GlobalStyles from 'styles/global';

function App() {
	return (
		<div>
			<Provider store={store}>
				<RouterProvider router={router} />
				<GlobalStyles />
			</Provider>
		</div>
	);
}

export default App;
