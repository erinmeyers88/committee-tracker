import React from 'react';
import {
	Toolbar,
	AppBar,
	IconButton,
	Typography,
	InputBase,
	Badge,
	makeStyles,
	fade
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { appName } from 'constants/appConstants';
import UserMenu from 'components/navigation/UserMenu';
import MobileMenu from 'components/navigation/MobileMenu';
import UVULogoWhite from 'assets/UVUHorizontalWhite.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		display: 'none',
		color: 'white',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	logo: {
		height: 64,
		cursor: 'pointer'
	}
}));

const TopMenu = () => {
	const classes = useStyles();
	const history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleUserMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleUserMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleGoHome = () => {
		history.push('/');
	};

	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<div className={classes.sectionMobile}>
						<IconButton
							onClick={handleMobileMenuOpen}
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='open drawer'
						>
							<MenuIcon />
						</IconButton>
					</div>
					<img className={classes.logo} src={UVULogoWhite} alt='' onClick={handleGoHome} />
					<Typography className={classes.title} variant='h6' noWrap>
						{appName}
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search…'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton color='inherit'>
							<Badge badgeContent={17} color='secondary'>
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							edge='end'
							aria-label='account of current user'
							aria-haspopup='true'
							onClick={handleUserMenuOpen}
							color='inherit'
						>
							<AccountCircleIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<UserMenu open={isMenuOpen} onClose={handleUserMenuClose} anchorEl={anchorEl} />
			<MobileMenu open={isMobileMenuOpen} onClose={handleMobileMenuClose} anchorEl={anchorEl} />
		</>
	);
};

export default TopMenu;
