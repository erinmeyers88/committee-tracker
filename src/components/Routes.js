import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoriesList from 'components/categories/CategoriesList';
import ProfileContainer from 'components/profile/ProfileContainer';
const Routes = () => {
	return (
		<Switch>
			<Route exact path={'/'} component={CategoriesList}></Route>
			<Route exact path={'/profile'} component={ProfileContainer} />
		</Switch>
	);
};

export default Routes;
