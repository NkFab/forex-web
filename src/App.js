import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Home from './components/Home/home'
import Login from './components/Login/login'
import SignUp from './components/SignUp/signup'
import Dashboard from './components/Dashboard/screen/Dashboard'
import { createMuiTheme } from 'material-ui/styles';

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjftd0aan5wux0178970bcwmw' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
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
      <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
        </MuiThemeProvider>
        </ApolloProvider>
    );
  }
}

export default App;
