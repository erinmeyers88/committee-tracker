import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	errors: [],
	categories: [],
	notifications: []
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setErrors(state, action) {
			state.errors = action.payload;
		},
		setCategories(state, action) {
			state.categories = action.payload;
		}
	}
});

export const { setErrors, setCategories } = appSlice.actions;
export default appSlice.reducer;

export const errorsSelector = state => state.app.errors;
export const categoriesSelector = state => state.app.categories;
export const notificationsSelector = state => state.app.notifications;
