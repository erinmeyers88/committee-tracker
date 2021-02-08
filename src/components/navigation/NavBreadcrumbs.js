import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const NavBreadcrumbs = () => {
	const history = useHistory();
	const { pathname } = history.location;
	const breadcrumbs = pathname.split('/').splice(1, 1);

	console.log('bc', breadcrumbs);

	const handleClick = link => {
		history.push(link);
	};

	return (
		<Breadcrumbs aria-label='breadcrumb'>
			<Link color='inherit' href='/' onClick={handleClick}>
				Home
			</Link>
			{breadcrumbs.map((b, i) => {
				return (
					<Link key={i} color='inherit' href={b} onClick={handleClick}>
						{b}
					</Link>
				);
			})}
		</Breadcrumbs>
	);
};

export default NavBreadcrumbs;
