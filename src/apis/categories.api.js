// import {axiosInstance} from 'services/configureAxios';
import { addError } from 'services/handleErrors';
import { getMockCategories } from 'mocks/categories.mock';

export const getCategories = () => async (dispatch, getState) => {
	console.log('here');
	// const url = '';
	try {
		// const res = await axiosInstance.get(url);
		const res = await getMockCategories();
		console.log('res', res);
		return res;
	} catch (error) {
		addError({ dispatch, getState, error });
	}
};
