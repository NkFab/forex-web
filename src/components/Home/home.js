import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem
} from 'material-ui'
import './homestyles.css'
import MenuIcon from '@material-ui/icons/Menu';
import { PermIdentity } from '@material-ui/icons';

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
                            <Link to="signup" style={{ textDecoration: 'none' }}>
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
                                        onClose={this.handleClose}
                                    >
                                        <Link to="login" style={{ textDecoration: 'none' }}>
                                            <MenuItem>Login</MenuItem>
                                        </Link>
                                        <Link to="signup" style={{ textDecoration: 'none' }}>
                                            <MenuItem>Sign up</MenuItem>
                                        </Link>
                                    </Menu>
                                    <IconButton color="inherit">
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
                <div id="about" className="about">
                    <h1>About</h1>
                </div>
            </div>
        )
    }
}
export default Home;