import { configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import appSlice from 'slice-reducers/appSlice';

export const store = configureStore({
	reducer: {
		app: appSlice
	},
	middleware: [reduxThunk]
});
