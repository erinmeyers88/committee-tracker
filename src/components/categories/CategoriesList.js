import React from 'react';
import { useSelector } from 'react-redux';
import { categoriesSelector } from 'slice-reducers/appSlice';

const CategoriesList = () => {
	const categories = useSelector(categoriesSelector);
	console.log('cat', categories);
	return (
		<div>
			{categories.map((c, i) => {
				console.log('c', c);
				return <div key={i}>{c.name}</div>;
			})}
		</div>
	);
};

export default CategoriesList;
