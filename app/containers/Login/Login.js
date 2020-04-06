import React from 'react';
import Button from '@material-ui/core/Button';
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import FacebookLogin from 'react-facebook-login';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
	}
}));

export default function SignUp() {
	const classes = useStyles();
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [passwordError, setPasswordError] = React.useState(null);
	const [emailError, setEmailError] = React.useState(null);

	const responseGoogle = (response) => {
		console.log(response);
	}

	const handleSubmit = event => {
		event.preventDefault();
		console.log("Event", event);
	};

	const verifyEmail = event => {
		var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
		var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
		var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
		var sQuotedPair = '\\x5c[\\x00-\\x7f]';
		var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
		var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
		var sDomain_ref = sAtom;
		var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
		var sWord = '(' + sAtom + '|' + sQuotedString + ')';
		var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
		var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
		var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
		var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
		var emailRegex = new RegExp(sValidEmail);
		if (event.target.value.match(emailRegex)) {
			setEmailError(null);
		} else {
			setEmailError('Valid email required');
		}
	}

	const handleEmailChange = event => {
		setEmail(event.target.value);
	}

	const fbHandleResponse = (data) => {
		console.log(data);

	}
	const fbHandleError = (data) => {
		console.log(data);
	}

	const verifyPassword = event => {
		var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		if (event.target.value.match(passwordRegex)) {
			setPasswordError(null);
		} else {
			setPasswordError('At least 8 digits, 1 uppercase, 1 number and 1 special character');
		}
	}

	const handlePasswordChange = event => {
		setPassword(event.target.value);
	}

	return (
		<form className={classes.form} onSubmit={handleSubmit} noValidate>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<label>Email</label>
					<input
						required
						autoFocus
						label="Email Address"
						name="email"
						value={email}
						onChange={handleEmailChange}
						onBlur={verifyEmail}
						autoComplete="email"
					/>
					{emailError && <Alert severity="error">{emailError}</Alert>}
				</Grid>

				<Grid item xs={12}>
					<label>Password</label>
					<input
						required
						name="password"
						value={password}
						onChange={handlePasswordChange}
						label="Password"
						type="password"
						onBlur={verifyPassword}
					/>
					{passwordError && <Alert severity="error">{passwordError}</Alert>}
				</Grid>

			</Grid>
			<div style={{ textAlign: 'center' }}>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className='submit'
				>
					Log in
                </Button>
			</div>

			<div style={{ textAlign: 'center' }}>Or</div>
			<Grid item xs={12} style={{ marginTop: '1rem'}}>
				<FacebookLogin
					appId="<YOUR_FB_APP_ID>"
					autoLoad={true}
					fields="name,email,picture"
					// onClick={fbHandleResponse}
					cssClass="facebook-signin"
					icon={<FontAwesomeIcon icon={faFacebook} style={{ marginRight: '2rem'}} />}
					callback={fbHandleResponse} />
				<GoogleLogin
					className="google-social-login-btn"
					clientId="<YOUR_GOOGLE_CLIENT_ID>"
					buttonText="Sign in with Google"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
			</Grid>
		</form>
	);
}
