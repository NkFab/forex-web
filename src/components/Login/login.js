import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    TextField
} from 'material-ui'
import './loginstyles.css'

class Login extends Component {
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
                <div className="login" color="primary">
                    <div>
                        <Card className="cardl">
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    LOGIN
                                </Typography>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        id="with-placeholder"
                                        label="Username or Email"
                                        placeholder="Username or Email"
                                        // className={classes.textField}
                                        // margin="normal"
                                    />
                                    <br />
                                    <TextField
                                        id="password-input"
                                        label="Password"
                                        // className={classes.textField}
                                        type="password"
                                        autoComplete="current-password"
                                        // margin="normal"
                                    />
                                </form>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => {alert('clicked')}} size="small" variant="raised" color="primary">Login</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;