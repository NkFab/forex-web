import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
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
import Paper from 'material-ui/Paper'

import MenuCard from '../components/Menu/MenuCard'
import Header from '../components/Header/Header'
import styles from './Style/UpdateStyle'

class UpdateInfo extends Component {
    // static PropTypes = {
        
    // }
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
            // latitude: nextProps.coords.latitude.toString(),
            // longitude: nextProps.coords.longitude.toString()
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


      handleSignup = async () => {
        const {user:{email,phone,phoneopt,companyName,password,address,openat,closedat,workdays},latitude,longitude} = this.state
        await this.props.CreateUserMutation({variables: {email,phone,phoneopt,companyName,password,address,openat,closedat,workdays,latitude,longitude}})
        alert('Thank you for Sign up')
        this.props.history.replace('/dashboard')
      }

    render() {
        const { classes } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.left}>
                    <MenuCard onClick={this.handleClickOpen}/>
                </div>
                <div className={styles.signup}>
                    <Header />
                    <div>
                        <Paper className={classes.formContent}>
                            OK
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired
  };

export default withStyles(styles) (UpdateInfo)