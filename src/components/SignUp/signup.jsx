import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactDOM } from 'react-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    TextField,
    RaisedButton
} from 'material-ui'
import './signupstyles.css'

class SignUp extends Component {
    render() {
        return (
            <div>
                <AppBar position="fixed" color="primary" elevation="none">
                    <Toolbar className="appb">
                        <Typography variant="title" color="inherit">
                            forext
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="signup" color="primary">
                    <div>
                        <Card className="card">
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    SIGN UP
                                </Typography>
                                <form noValidate autoComplete="off">
                                    <div className="left">
                                        <TextField
                                            id="with-placeholder"
                                            label="Email"
                                            placeholder="Email"
                                        // className={classes.textField}
                                        // margin="normal"
                                        />
                                        <br />
                                        <TextField
                                            id="password-input"
                                            label="Password"
                                            placeholder="Password"
                                            type="password"
                                        // className={classes.textField}
                                        // margin="normal"
                                        />
                                        <br />
                                        <TextField
                                            id="with-placeholder"
                                            label="Address"
                                            // className={classes.textField}
                                            placeholder="eg. kg # st, avenue"
                                        // margin="normal"
                                        />
                                        <br />
                                        <br />
                                        <CardActions>
                                            <Button href={() => alert('clicked')} size="small" variant="raised" color="primary">Sign Up</Button>
                                        </CardActions>
                                    </div>
                                    <div className="right">
                                        <TextField
                                            id="with-placeholder"
                                            label="Company name"
                                            placeholder="Company name"
                                        // className={classes.textField}
                                        // margin="normal"
                                        />
                                        <br />
                                        <TextField
                                            id="password"
                                            label="Confirm password"
                                            type="password"
                                        // className={classes.textField}
                                        // margin="normal"
                                        />
                                        <br />
                                        <TextField
                                            id="password-input"
                                            label="Phone number"
                                            // className={classes.textField}
                                            placeholder="Phone number"
                                        // autoComplete="current-password"
                                        // margin="normal"
                                        />
                                    </div>
                                    <div className="btn">
                                        
                                    </div>
                                </form>
                            </CardContent>

                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUp;