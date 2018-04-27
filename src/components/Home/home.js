import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactDOM } from 'react-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Paper
} from 'material-ui'
import './homestyles.css'
class home extends Component {
  
    render() {
       
        return (
            <div>
                <AppBar position="fixed" color="primary" elevation="none">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            forext
                        </Typography>
                        <div className="menu">
                            <Link to="login" style={{ textDecoration: 'none' }}>
                                <Button color="secondary">LOGIN</Button>
                            </Link>
                            <Link to="dashboard" style={{ textDecoration: 'none' }}>
                                <Button color="secondary">SIGN UP</Button>
                            </Link>
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
                    
                </div>
            </div>
        )
    }
}
export default home;