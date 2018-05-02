import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//apollo things
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { split } from 'apollo-link'
//apollo things end
import Home from './components/Home/home'
import Login from './components/Login/login'
import SignUp from './components/SignUp/signup'
import Dashboard from './components/Dashboard/screen/Dashboard'
// import SimpleFormExample from './components/tests/test'
import { createMuiTheme } from 'material-ui/styles';

const serviceId = 'cjftd0aan5wux0178970bcwmw'
// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: `https://api.graph.cool/simple/v1/${serviceId}` })

const wsLink = new WebSocketLink({
  uri: `wss://subscriptions.graph.cool/v1/${serviceId}`,
  options: {
    reconnect: true
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)


const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
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
            {/* <Route path="/tests" component={SimpleFormExample} /> */}
          </div>
        </Router>
        </MuiThemeProvider>
        </ApolloProvider>
    );
  }
}

export default App;
