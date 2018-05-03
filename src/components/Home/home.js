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
    IconButton,
    TextField
} from 'material-ui'
import { FormLabel, InputLabel } from 'material-ui/Form'
import { PermIdentity } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import './homestyles.css'
import './bootstrap-grid.css'
import './bootstrap-grid.min.css'
import './bootstrap-reboot.css'
import './bootstrap-reboot.min.css'
import './bootstrap.css'
import './bootstrap.min.css'
import note from '../../assets/note.png'
import exchange from '../../assets/money-exchange.png'
import uprates from '../../assets/currency-rates.png'
import dash from '../../assets/dashboard.png'
import loc from '../../assets/placeholder.png'
import phone from '../../assets/smartphone.png'
import email from '../../assets/message.png'

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
                                        color="primary"
                                    >
                                        <Link to="login" style={{ textDecoration: 'none' }}>
                                            <MenuItem>Login</MenuItem>
                                        </Link>
                                        <Link to="signup" style={{ textDecoration: 'none' }}>
                                            <MenuItem>Create Account</MenuItem>
                                        </Link>
                                    </Menu>
                                    <IconButton color="inherit-">
                                        <MenuIcon color="secondary" />
                                    </IconButton>
                                </div>
                            )}
                        </div>
                    </Toolbar>
                </AppBar>
                <div className="container-fluid home" color="primary">
                    <div className="col-md-12">
                        <h1>forext. Stand out</h1>
                        <h4>You like attention? Who doesn't want to stand out. <br />
                            Make your brand forex bureau stand out <br /> in the <b>forest</b> (midst) of other forex bureaux</h4>
                        <br />
                        <Link to="signup">
                            <Button color="secondary" variant="raised">GET STARTED</Button>
                        </Link>
                    </div>
                </div>
                <div id="features" className="features container-fluid">
                    <div className="row">
                        <div className="col-lg-12"><h1>Features</h1></div>
                        <div></div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <img src={note} />
                            <br />
                            <h3>Register</h3>
                            <p>Register your forex bureau to make it discoverable on the map whenever
                        a client is in search of the nearest office.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <img src={exchange} />
                            <br />
                            <h3>Rates</h3>
                            <p>Post your exchange rates to help us compare your rates to
                        other forex bureax' rates.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <img src={uprates} />
                            <br />
                            <h3>Update</h3>
                            <p>Continue to update your currency exchange rates as they change to
                         give out accurate information.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <img src={dash} />
                            <br />
                            <h3>Dashboard</h3>
                            <p>Dashboard where you will be able to do various actions and
                        manage your profile on forext. </p>
                        </div>
                    </div>
                </div>
                <div id="about" className="about container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>About</h1>
                            <p>forext was designed by the developing team from Limiteless apps
                            which is part of the Limitless agency group.
                            </p>
                            <h3>What we beleive in</h3>
                            <p>" If you make a product good enough, even though you live in the depths
                            of the forest the public will make a path to your door. But if you want the
                    public in sufficient numbers, you would better construct a highway " William Randolph</p>
                            <h3>Mission</h3>
                            <br />
                            <h3>Vision</h3>
                        </div>
                    </div>
                </div>
                <div id="contact" className="contact container-fluid">
                    <div className="row">
                        <div className="col-lg-12"><h1>Contact</h1></div>
                        <br /><br />
                        <div className="col-lg-6 col-md-4 col-xs-12">
                            <h4>Get in touch</h4>
                            <ul className="intouch">
                                <br />
                                <li><img src={loc} height="32" width="32" /> 21 KG 670 Street, Kimihurura, Kigali</li>
                                <br />
                                <li><img src={phone} height="32" width="32" /> +250 789 906 300</li>
                                <br />
                                <li><img src={email} height="32" width="32" /> Limitlessagency250@gmail.com </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-4 col-xs-12">
                            <h4>Your feedback is of value</h4>
                            <form validate autoComplete="off">
                                <TextField
                                    id="with-placeholder"
                                    label="Names"
                                    placeholder="Names"
                                    fullWidth
                                    required
                                // value={this.state.email}
                                // onChange={e => this.setState({ email: e.target.value })}
                                />
                                <br /><br />
                                <TextField
                                    id="with-placeholder"
                                    label="Email"
                                    placeholder="Email"
                                    fullWidth
                                    required
                                />
                                <br /><br />
                                <TextField
                                    id="with-placeholder"
                                    label="Message"
                                    placeholder="Your message here..."
                                    multiline
                                    rows={5}
                                    fullWidth
                                    required
                                />
                                <br /><br />
                                <Button
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    type="submit"
                                >
                                    SEND
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="row">
                        <div className="col-12">
                            <h6>© Copyright Limitless apps 2018</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;