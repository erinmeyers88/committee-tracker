import React, { useEffect } from 'react';
import { getCategories } from 'apis/categories.api';
import { setCategories } from 'slice-reducers/appSlice';
import { useDispatch } from 'react-redux';
import TopMenu from 'components/navigation/TopMenu';
import Routes from 'components/Routes';
import { withRouter } from 'react-router-dom';
import NavBreadcrumbs from 'components/navigation/NavBreadcrumbs';
const MainContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchCategories = async () => {
			const categories = await dispatch(getCategories());
			dispatch(setCategories(categories));
		};
		fetchCategories();
	}, []);

	return (
		<div>
			<TopMenu />
			<NavBreadcrumbs />
			<Routes />
		</div>
	);
};

export default withRouter(MainContainer);
