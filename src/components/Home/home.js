import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactDOM } from 'react-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    IconButton
} from 'material-ui'
import { PermIdentity } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import './homestyles.css'
import note from '../../assets/note.png'
import exchange from '../../assets/money-exchange.png'
import uprates from '../../assets/currency-rates.png'
import dash from '../../assets/dashboard.png'

class Home extends Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    render() {
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className="root">
                <AppBar position="fixed" color="primary" elevation="none">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className="flex">
                            forext
                        </Typography>
                        <div>
                            {/* <Link to="login" style={{ textDecoration: 'none' }}>
                                <Button color="secondary">LOGIN</Button>
                            </Link>
                            <Link to="dashboard" style={{ textDecoration: 'none' }}>
                                <Button color="secondary">SIGN UP</Button>
                            </Link> */}
                            {auth && (
                                <div>
                                    <IconButton
                                        aria-owns={open ? 'menu-appbar' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleMenu}
                                        color="inherit"
                                    >
                                        <PermIdentity />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                    >
                                        <Link to="login" style={{ textDecoration: 'none' }}>
                                            <MenuItem>Login</MenuItem>
                                        </Link>
                                        <Link to="signup" style={{ textDecoration: 'none' }}>
                                            <MenuItem>Create Account</MenuItem>
                                        </Link>
                                    </Menu>
                                    <IconButton color="inherit-">
                                        <MenuIcon />
                                    </IconButton>
                                </div>
                            )}
                        </div>
                    </Toolbar>
                </AppBar>
                <div className="home" color="primary">
                    <div className="textleft">
                        <h1>forext. Stand out</h1>
                        <h4>You like attention? Who doesn't want to stand out. <br />
                            Make your brand forex bureau stand out <br /> in the <b>forest</b> (midst) of other forex bureaux</h4>
                        <br />
                        <Link to="signup">
                            <Button color="secondary" variant="raised">GET STARTED</Button>
                        </Link>
                    </div>
                </div>
                <div id="features" className="features">
                <br /><br />
                    <h1>Features</h1>
                    <div className="register">
                        <img src={note} />
                        <br />
                        <h3>Register</h3>
                        <p>Register your forex bureau to make it discoverable on the map whenever 
                        a client is in search of the nearest office.</p>
                    </div>
                    <div className="exrates">
                        <img src={exchange} />
                        <br />
                        <h3>Rates</h3>
                        <p>Post your exchange rates to help us compare your rates to 
                        other forex bureax' rates.</p>
                    </div>
                    <div className="update">
                        <img src={uprates} />
                        <br />
                        <h3>Update</h3>
                        <p>Continue to update your currency exchange rates as they change to
                         give out accurate information.</p>
                    </div>
                    <div className="dashb">
                        <img src={dash} />
                        <br />
                        <h3>Dashboard</h3>
                        <p>Dashboard where you will be able to do various actions and 
                        manage your profile on forext. </p>
                    </div>
                </div>
                <div id="about" className="about">
                    <h1>About</h1>
                </div>
                <div id="contact" className="contact">
                    <h1>Contact</h1>
                </div>
            </div>
        )
    }
}
export default Home;