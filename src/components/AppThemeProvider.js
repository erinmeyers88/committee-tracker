import React, { lazy, Suspense } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { themeGreen } from 'constants/colors';
const CssBaseline = lazy(() => import('@material-ui/core/CssBaseline'));

const AppThemeProvider = ({ children }) => {
	const theme = createMuiTheme({
		palette: {
			primary: themeGreen,
			secondary: grey
		},
		typography: {
			useNextVariants: true,
			suppressDeprecationWarnings: true,
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"'
			].join(',')
		},
		overrides: {
			// MuiCssBaseline: {
			// 	'@global': {
			// 		'@font-face': [Graphik]
			// 	}
			// },
			MuiSlider: {
				track: { backgroundColor: '#fff' },
				thumb: { backgroundColor: '#fff' }
			}
		}
	});

	return (
		<MuiThemeProvider theme={theme}>
			<Suspense fallback={null}>
				<CssBaseline />
			</Suspense>
			{children}
		</MuiThemeProvider>
	);
};
export default AppThemeProvider;
