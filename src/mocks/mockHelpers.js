export const mockPromise = resolveValue => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(resolveValue);
		}, 300);
	});
};
