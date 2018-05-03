import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ReactDOM } from 'react-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
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
    state = {
        email: '',
        password: '',
    }
    handleLogin = async () => {
        const { email, password } = this.state
        await this.props.LoginUserMutation({ variables: { email, password } })
        this.props.history.replace('/')

    }
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
                    <div className="root">
                        <Card className="cardl">
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    LOGIN
                                </Typography>
                                <form validate autoComplete="off">
                                    <TextField
                                        id="with-placeholder"
                                        label="Email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                        required
                                    />
                                    <br />
                                    <TextField
                                        id="password-input"
                                        label="Password"
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                    // margin="normal"
                                    />
                                </form>
                            </CardContent>
                            <CardActions>
                                <Button
                                    onClick={this.handleLogin}
                                    size="small"
                                    variant="raised"
                                    color="primary"
                                    fullwidth
                                >
                                    Login
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
const loginMutation = gql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    signinUser(email: { email:$email, password: $password }){
      user{
        id
        email
      }
      token
    }
  }
`;
const LoginPageWithMutation = graphql(loginMutation, { name: 'LoginUserMutation' })(Login)
export default withRouter(LoginPageWithMutation)