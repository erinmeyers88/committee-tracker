import { mockPromise } from 'mocks/mockHelpers';

export const getMockCategories = () => {
	const cateogries = [
		{
			name: 'Board of Trustees'
		},
		{
			name: "President's Council"
		},
		{ name: 'Faculty Senate' },
		{ name: 'PACE' },
		{ name: 'UVUSA' }
	];
	return mockPromise(cateogries);
};
