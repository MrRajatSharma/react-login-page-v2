import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../../components/Copyright';
import Login from './Login.js';
import Register from './Register.js';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import './style.scss';

const useStyles = makeStyles((theme) => ({
	submit: {
		margin: theme.spacing(3, 0, 2),
		display: 'inline-block',
		textTransform: 'none',
		fontSize: '15.8px',
		padding: '8px 16px',
		border: '#7e6cee',
		width: '100%',
		borderRadius: '4rem',
		backgroundColor: '#7e6cee',
		'&:hover, &:active, &:focus': {
			backgroundColor: '#7e6cee',
			outline: 'none'
		},
		outline: 'none'
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [isSignin, toggleSignin] = React.useState(true);

	const handleToggleSignin = event => {
		console.log("handle Toggle signin");
		event.preventDefault();
		event.stopPropagation();
		toggleSignin(!isSignin);
	}

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<div className="sign">
				<Container component="main" style={{ padding: '1rem 3rem 1rem' }}>
					<CssBaseline />
					{/* <Avatar className={classes.avatar}>
					
					</Avatar> */}
					<h2 className="title">
						{isSignin ? 'Log In' : 'Register'}
					</h2>
						{
							isSignin ?
								<Login /> :
								<Register />
						}

						<Link href="#" onMouseDown={handleToggleSignin} style={{ color: '#3F51B5', display: 'block', fontSize: '1rem', marginTop: '2rem', textAlign: 'center' }}>
							{ !isSignin ? 'Already have an account? Sign in' : 'Don\'t have an account? Register' }
						</Link>
					<Copyright />
				</Container>
			</div>
		</Modal>
	);
}
