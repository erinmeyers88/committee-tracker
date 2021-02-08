import { setErrors } from 'slice-reducers/appSlice';

export const addError = ({ dispatch, getState, error }) => {
	const errorData = error.response;
	const updatedErrors = [...getState().app.errors];
	updatedErrors.push(errorData);
	dispatch(setErrors(updatedErrors));
};

export const dismissError = ({ errorIndex, errors, dispatch }) => {
	let updatedErrors = [...errors];
	updatedErrors.splice(errorIndex, 1);
	dispatch(setErrors(updatedErrors));
};

export const getErrorMessageFromStatus = error => {
	switch (error.status) {
		default:
			return `${error.status} : An error occurred and has been reported to our team.`;
	}
};
