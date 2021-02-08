import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

const MobileMenu = ({ open, anchorEl, onClose }) => {
	return (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			onClose={onClose}
		>
			<MenuItem onClick={onClose}>Profile</MenuItem>
			<MenuItem onClick={onClose}>My account</MenuItem>
		</Menu>
	);
};

export default MobileMenu;
