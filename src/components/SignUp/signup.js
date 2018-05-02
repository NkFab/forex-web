import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom'
import { ReactDOM } from 'react-dom';
import { geolocated } from 'react-geolocated';
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
    TextField,
    RaisedButton
} from 'material-ui'
import './signupstyles.css'

class SignUp extends Component {
    static PropTypes = {
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            companyName: '',
            password: '',
            address: '',
            opening: '',
            closing: '',
            latitude: '',
            longitude: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            latitude: nextProps.coords.latitude.toString(),
            longitude: nextProps.coords.longitude.toString()
        })
    }
    handleSignup = async () => {
        const { email, phone, companyName, password, address, opening, closing, latitude, longitude } = this.state
        console.log(latitude)
        console.log(longitude)
        console.log(email)
        let response
        try {
            response = await this.props.CreateUserMutation({ variables: { email, phone, companyName, password, address, opening, closing, latitude, longitude } })
            alert(response)
            this.props.history.replace('/')
        } catch (err) {
            console.log(err)
        }

    }

    render() {
        return (
            <div>
                <AppBar position="fixed" color="primary">
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
                                            value={this.state.email}
                                            onChange={e => this.setState({ email: e.target.value })}
                                        />
                                        <br />
                                        <TextField
                                            id="password-input"
                                            label="Password"
                                            placeholder="Password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={e => this.setState({ password: e.target.value })}
                                        />
                                        <br />
                                        <TextField
                                            id="with-placeholder"
                                            label="Address"
                                            value={this.state.address}
                                            onChange={e => this.setState({ address: e.target.value })}
                                            placeholder="eg. kg # st, avenue"
                                        // margin="normal"
                                        />
                                        <br />
                                        <TextField
                                            id="password-input"
                                            label="Phone number"
                                            value={this.state.phone}
                                            onChange={e => this.setState({ phone: e.target.value })}
                                            // className={classes.textField}
                                            placeholder="Phone number"
                                        // autoComplete="current-password"
                                        // margin="normal"
                                        />
                                    </div>
                                    <div className="right">
                                        <TextField
                                            id="with-placeholder"
                                            label="Company name"
                                            placeholder="Company name"
                                            value={this.state.companyName}
                                            onChange={e => this.setState({ companyName: e.target.value })}
                                        />
                                        <br />
                                        <TextField
                                            id="password"
                                            label="Opening Hours"
                                            value={this.state.opening}
                                            onChange={e => this.setState({ opening: e.target.value })}
                                        />
                                        <br />
                                        <TextField
                                            id="password"
                                            label="Closing Hours"
                                            value={this.state.closing}
                                            onChange={e => this.setState({ closing: e.target.value })}
                                        />
                                        <br />
                                        <br />
                                        <CardActions>
                                            <Button onClick={this.handleSignup} size="small" variant="raised" color="primary">Sign Up</Button>
                                        </CardActions>
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

const signUpMutation = gql`
mutation CreateUserMutation(
    $latitude: String!,
    $longitude: String!,
    $companyName: String!,
    $address: String!,
    $opening: String!,
    $closing: String!,
    $phone: String!, 
    $email: String!, 
    $password: String!
) {
    createUser(
        location:{
            latitude: $latitude,
            longitude: $longitude
        },
        companyName: $companyName,
        address: $address,
        openingHour:$opening,
        closingHour: $closing,
        phoneNumber: $phone,
        authProvider: { 
            email: 
            { 
                 email:$email,
                 password:$password 
            } 
        }){
        id
        companyName
        email
        password
        address
        phoneNumber
        openingHour
        closingHour
        location{
            id
            latitude
            longitude
          }
      }
  }
`;

const CreatePageWithMutation = graphql(signUpMutation, { name: 'CreateUserMutation' })(SignUp)
export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(withRouter(CreatePageWithMutation))