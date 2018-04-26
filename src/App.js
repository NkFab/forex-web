import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Login from './components/Login/login'
import SignUp from './components/SignUp/signup'
import { createMuiTheme } from 'material-ui/styles';

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#40926d',
          main: '#006442',
          dark: '#00391b',
          contrastText: '#fff',
        },
        secondary: {
          light: '#fff',
          main: '#fff',
          dark: '#fff',
          contrastText: '#006442',
        },
      },
    });
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
