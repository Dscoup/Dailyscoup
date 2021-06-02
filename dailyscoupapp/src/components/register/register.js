// import React from 'react';
import React ,{useState,useRef} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './register.css';
import { Facebook, Apple, Mail } from '@material-ui/icons';
import {LoginServices} from '../../services/login'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [validation1, setValidation1] = useState(false);
    const [validation2, setValidation2] = useState(false);
    const [validation3, setValidation3] = useState(false);
    const [mailText, setEmailText] = useState('');
    const [passText, setPassText] = useState('');
    const [nameText, setNameText] = useState('');
    const valueRef1 = useRef(''); 
    const valueRef2 = useRef(''); 
    const valueRef3 = useRef(''); 

    const handleSubmit= (e) => {
      // alert('hit')
      e.preventDefault();
      if(valueRef1.current.value == '')
      {
          setValidation1(true);
          setNameText('Username should not be empty')
      }
      else
      {
          setValidation1(false);
          setNameText('')
      }

      if(valueRef2.current.value == '')
      {
          setValidation2(true);
          setEmailText('Email should not be empty')
      }
      else{
          setValidation2(false);
          setEmailText('')
      }

      if(valueRef3.current.value == '')
      {
        setValidation3(true);
          setPassText('Password should not be empty')
      }
      else{
        setValidation3(false);
          setPassText('')
      }
      
    }

    return (
        <div>
            <h1>DAILY SCOUP</h1>
            <Container component="main" maxWidth="xs">

                <CssBaseline />
                <div className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography> */}
                    <form className={classes.form} onSubmit ={e => { handleSubmit(e) }}>
                    <TextField
                            // variant="outlined"
                            margin="normal"
                            // required
                            fullWidth
                            id="username"
                            label="User Name"
                            name="username"
                            autoComplete="name"
                            autoFocus
                            helperText={nameText}
                            error = {validation1}
                            inputRef={valueRef1}
                        />
                        <TextField
                            // variant="outlined"
                            margin="normal"
                            // required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            helperText={mailText}
                            error = {validation2}
                            inputRef={valueRef2}
                        />
                        <TextField
                            // variant="outlined"
                            margin="normal"
                            // required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            inputRef={valueRef3}
                            error = {validation3}
                            helperText={passText}
                        />
                        {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
                        <p>By clicking and option below, I agree to the Terms of use and have read the privarcy statement</p>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // color="primary"
                            className={classes.submit}
                        >
                            Sign Up
          </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
              </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Continue as guest? "}
                                </Link>
                            </Grid>


                        </Grid>
                        <br />
                        <br />
                        <p>
                            Please Sign Up with
              </p>
                        <Grid container>
                            <Grid item xs>
                                 {/* <Avatar > */}
                                    <Facebook />
                                 {/* </Avatar> */}
                            </Grid>
                            <Grid item xs>
                                 {/* <Avatar > */}
                                    <Apple />
                                 {/* </Avatar> */}
                            </Grid>
                            <Grid item>
                            {/* <Avatar > */}
                                    <Mail />
                                 {/* </Avatar> */}
                            </Grid>
                        </Grid>
                        <br />
                        <br />
                    </form>
                </div>

            </Container>
        </div>
    );
}