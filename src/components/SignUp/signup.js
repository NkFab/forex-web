import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
import { Link, withRouter } from 'react-router-dom'
import {
    TextValidator,
    ValidatorForm,
    SelectValidator
} from 'react-material-ui-form-validator'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { geolocated } from 'react-geolocated';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    TextField,
    Checkbox
} from 'material-ui'
import Radio, { RadioGroup } from 'material-ui/Radio';
import {
    FormLabel,
    FormControl,
    FormControlLabel,
    FormHelperText
} from 'material-ui/Form';
import './signupstyles.css'

class SignUp extends Component {
    static PropTypes = {
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            user: {
                email: null,
                password: null,
                companyName: null,
                address: '',
                phone: '',
                phoneopt: '',
                openat: '',
                closedat: '',
                workdays: '',
                agree: '',
            },
            submitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            latitude: nextProps.coords.latitude.toString(),
            longitude: nextProps.coords.longitude.toString()
        })
    }
    componentWillMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }

    handleChange(event) {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    handleSubmit() {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    // handleSubmit() {
    //     // your submit logic
    // }

    // state = {
    //     email: '',
    //     phone:'',
    //     companyName:'',
    //     password:'',
    //     address:'',
    //     opening: '',
    //     closing:''

    //   }
      handleSignup = async () => {
        const {user:{email,phone,phoneopt,companyName,password,address,openat,closedat,workdays},latitude,longitude} = this.state
        await this.props.CreateUserMutation({variables: {email,phone,phoneopt,companyName,password,address,openat,closedat,workdays,latitude,longitude}})
        alert('Thank you for Sign up')
        this.props.history.replace('/dashboard')
      }

    render() {
        const { user, submitted } = this.state;
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
                                <br />
                                <br />
                                <ValidatorForm
                                    ref="form"
                                    onSubmit={this.handleSubmit}
                                >
                                    <div className="left">
                                        <TextValidator
                                            id="with-placeholder"
                                            label="Email"
                                            placeholder="Email"
                                            name="email"
                                            type="email"
                                            validators={['required', 'isEmail']}
                                            errorMessages={['this field is required', 'The email is invalid']}
                                            value={user.email}
                                            onChange={this.handleChange}
                                        />
                                        <br /><br />
                                        <TextValidator
                                            id="password-input"
                                            label="Password"
                                            placeholder="Password"
                                            onChange={this.handleChange}
                                            name="password"
                                            type="password"
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            value={user.password}
                                        />
                                        <br /><br />
                                        <TextValidator
                                            id="password-input"
                                            label="Confirm password"
                                            placeholder="Confirm password"
                                            onChange={this.handleChange}
                                            name="repeatPassword"
                                            type="password"
                                            validators={['isPasswordMatch', 'required']}
                                            errorMessages={['password mismatch', 'this field is required']}
                                            value={user.repeatPassword}
                                        />
                                        <br /><br />
                                        <TextValidator
                                            id="with-placeholder"
                                            label="Company name"
                                            placeholder="Company name"
                                            onChange={this.handleChange}
                                            name="companyName"
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            value={user.companyName}
                                        />
                                        <br /><br />
                                        <TextValidator
                                            id="with-placholder"
                                            label="Address"
                                            placeholder="eg. KK # st, Avenue"
                                            onChange={this.handleChange}
                                            name="address"
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            value={user.address}
                                        />
                                        <br /><br />
                                    </div>
                                    <div className="right">
                                        <TextValidator
                                            id="with-placeholder"
                                            label="Phone Number 1"
                                            placeholder="Phone number 1"
                                            onChange={this.handleChange}
                                            name="phone"
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            value={user.phone}
                                        />
                                        <br /><br />
                                        <TextValidator
                                            id="with-placeholder"
                                            label="Phone Number 2 *optional"
                                            placeholder="Phone number 2"
                                            onChange={this.handleChange}
                                            name="phoneopt"
                                            value={user.phoneopt}
                                        />
                                        <br /><br />
                                        <TextValidator
                                            id="time"
                                            label="Open at"
                                            type="time"
                                            defaultValue="00:00"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 mins
                                            }}
                                            name="openat"
                                            value={user.openat}
                                            validators={['required']}
                                            errorsMessages={['this field is required']}
                                            onChange={this.handleChange}
                                            className="timepickers"
                                        />
                                        <br /><br />
                                        <TextValidator
                                            id="time"
                                            label="Closed at"
                                            type="time"
                                            defaultValue="00:00"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 mins
                                            }}
                                            name="closedat"
                                            value={user.closedat}
                                            validators={['required']}
                                            errorsMessages={['this field is required']}
                                            onChange={this.handleChange}
                                            className="timepickers"
                                        />
                                        <br /><br />
                                        <FormControl component="fieldset" required>
                                            <FormLabel component="legend">Work days</FormLabel>
                                            <RadioGroup
                                                aria-label="Work days"
                                                name="workdays"
                                                value={user.workdays}
                                                onChange={this.handleChange}
                                            >
                                                <FormControlLabel value="5/7" control={<Radio color="primary" />} label="5/7" />
                                                <FormControlLabel value="7/7" control={<Radio color="primary" />} label="7/7" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </ValidatorForm>
                                <br /><br />
                                <div className="btn">
                                    <div className="agree">
                                        <div>
                                            <Checkbox
                                                checked={user.agree}
                                                onChange={this.handleChange}
                                                value="agree"
                                                color="primary"
                                            />
                                        </div>
                                        <div>
                                            <p>I agree to the terms and conditions.</p>
                                        </div>
                                    </div>
                                    {/* <CardActions> */}
                                    {/* <Button fullWidth onClick={this.handleSignup} size="small" variant="raised" color="primary">Sign Up</Button> */}
                                    <Button
                                        onClick={this.handleSignup}
                                        fullWidth
                                        variant="raised"
                                        color="primary"
                                        type="submit"
                                        // label={
                                        //     (submitted && 'Your form is submitted!')
                                        //     || (!submitted && 'Submit')
                                        // }
                                        // style={{ marginRight: '16px' }}
                                        // disabled={submitted}
                                    >
                                        Sign Up
                                        </Button>
                                    {/* </CardActions> */}
                                </div>
                                {/* <form noValidate autoComplete="off">
                                    <div className="left">
                                        <TextField
                                            id="with-placeholder"
                                            label="Email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={e => this.setState({email: e.target.value})}
                                        />
                                        <br />
                                        <br />
                                        <TextField
                                            id="password-input"
                                            label="Password"
                                            placeholder="Password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={e => this.setState({password: e.target.value})}
                                        />
                                        <br />
                                        <br />
                                        <TextField
                                            id="with-placeholder"
                                            label="Address"
                                            value={this.state.address}
                                            onChange={e => this.setState({address: e.target.value})}
                                            placeholder="eg. kg # st, avenue"
                                        // margin="normal"
                                        />
                                         <br />
                                        <TextField
                                            id="password-input"
                                            label="Phone number"
                                            value={this.state.phone}
                                            onChange={e => this.setState({phone: e.target.value})}
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
                                            onChange={e => this.setState({companyName: e.target.value})}
                                        />
                                        <br />
                                        <br />
                                        <TextField
                                            id="password"
                                            label="Opening Hours"
                                            value={this.state.opening}
                                            onChange={e => this.setState({opening: e.target.value})}
                                        />
                                        <br />
                                        <br />
                                         <br />
                                        <TextField
                                            id="password"
                                            label="Closing Hours"
                                            value={this.state.closing}
                                            onChange={e => this.setState({closing: e.target.value})}
                                        />
                                        <br />
                                        <br />
                                        <CardActions>
                                            <Button fullWidth href={() => alert('clicked')} size="small" variant="raised" color="primary">Sign Up</Button>
                                        </CardActions>
                                    </div>
                                    <div className="btn">
                                        
                                          <br />
                                        <br />
                                        <CardActions>
                                            <Button onClick={this.handleSignup} size="small" variant="raised" color="primary">Sign Up</Button>
                                        </CardActions>
                                    </div>
                                </form> */}
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
    $companyName: String!,
    $address: String!,
    $openat: String!,
    $closedat: String!,
    $workdays: String!,
    $phone: String!,
    $phoneopt: String!,
     $email: String!,
      $password: String!,
    $longitude: String!,
$latitude: String!) {
    createUser(
        location:{
            latitude: $latitude,
        longitude: $longitude
    },
        companyName: $companyName,
        address: $address,
        openingHour: $openat,
        closingHour: $closedat,
        phoneNumber: $phone,
        phoneNumber2: $phoneopt,
        wdays: $workdays,
        authProvider: 
        { email: { email: $email, password: $password } }){
        id
        companyName
        email
        address
        phoneNumber
        phoneNumber2
        openingHour
        closingHour
        wdays
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