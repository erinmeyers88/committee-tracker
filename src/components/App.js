import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'services/configureStore';
import AppThemeProvider from './AppThemeProvider';
import MainContainer from 'components/MainContainer';
function App() {
	return (
		<Provider store={store}>
			<AppThemeProvider>
				<BrowserRouter>
					<MainContainer />
				</BrowserRouter>
			</AppThemeProvider>
		</Provider>
	);
}

export default App;
