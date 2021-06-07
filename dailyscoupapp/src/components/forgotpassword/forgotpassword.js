import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';



// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(2),
//             width: '50ch',
//         },
//     },
// }));

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': {
                        margin: theme.spacing(2),
                        width: '50ch',
                    },
        
    },
    avatar: {
        margin: theme.spacing(5),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing(2, 20, 2),
        // align: 'center'
    },
}));

export default function ForgotPassword() {
    const classes = useStyles();

    return (
        <div>
            <Container component="main" maxWidth="xs">
            <h1>Forgot Password</h1>

        <form className={classes.paper} noValidate autoComplete="off">
            <div>
            
            <TextField
                            variant="outlined"
                            margin="normal"
                            // required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                           
                        />

             <Button
                            type="button"
                            // fullWidth
                            variant="contained"
                            // color="primary"
                            className={classes.submit}
                            style={{backgroundColor: '#000000', color: '#FFFFFF'}}
                        >Submit</Button>
            </div>
        </form>
        </Container>
        </div>
    );
}
