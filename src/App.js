import { Provider } from 'react-redux'
import Routing from 'routes/Routing'
import { store } from 'store/store'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { theme } from 'styles/theme'

function App() {
	// if (process.env.NODE_ENV === 'development') {
	// 	worker.start()
	// }
	return (
		<div>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Routing />
					<GlobalStyles />
				</ThemeProvider>
			</Provider>
		</div>
	)
}

export default App
