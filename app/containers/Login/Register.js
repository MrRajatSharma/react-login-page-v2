import React from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import './style.scss';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const [isSignin, toggleSignin] = React.useState(true);
	const [fName, setFname] = React.useState('');
	const [lName, setLname] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const [fNameError, setFNameError] = React.useState(null);
	const [lNameError, setLNameError] = React.useState(null);
	const [passwordError, setPasswordError] = React.useState(null);
	const [emailError, setEmailError] = React.useState(null);

	const verifyFname = event => {
		if (event.target.value.length <= 3) {
			setFNameError('At least 3 characters required');
		} else {
			setFNameError(null);
		}
	}
	const handleFnameChange = event => {
		setFname(event.target.value);
	}

	const verifyLname = event => {
		if (event.target.value.length <= 3) {
			setLNameError('At least 3 characters required');
		} else {
			setLNameError(null);
		}

	}
	const handleLnameChange = event => {
		setLname(event.target.value);
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
                    <Grid item xs={12} sm={6}>
                        <label>First Name</label>
                        <input
                            autoComplete="fname"
                            name="firstName"
                            required
                            value={fName}
                            onChange={handleFnameChange}
                            autoFocus
                            onBlur={verifyFname}
                        />
                        {fNameError && <Alert severity="error">{fNameError}</Alert>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label>Last Name</label>
                        <input
                            required
                            name="lastName"
                            value={lName}
                            onChange={handleLnameChange}
                            onBlur={verifyLname}
                            autoComplete="lname"
                        />
                        {lNameError && <Alert severity="error">{lNameError}</Alert>}
                    </Grid>
                <Grid item xs={12}>
                    <label>Email</label>
                    <input
                        required
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

        
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="dark" />}
                        label="I agree to terms and conditions and privacy policy"
                    />
                </Grid>
            </Grid>
            <div style={{ textAlign: 'center' }}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className='submit'
                >
                    Register
                </Button>
            </div>
        </form>
    );
}
