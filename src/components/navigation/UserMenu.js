import React from 'react';
import { Menu, MenuItem, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const UserMenu = ({ open, anchorEl, onClose }) => {
	const history = useHistory();
	const onClickProfile = () => {
		history.push('/profile');
		onClose();
	};

	const onClickLogout = () => {
		history.push('/logout');
	};

	return (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			onClose={onClose}
		>
			<MenuItem onClick={onClickProfile}>Profile</MenuItem>
			<Divider />
			<MenuItem onClick={onClickLogout}>Logout</MenuItem>
		</Menu>
	);
};

export default UserMenu;
