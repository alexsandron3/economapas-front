import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Login from './components/pages/Login';
import Index from './components/pages/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appbar from './components/partials/Appbar';
import { makeStyles, ThemeProvider } from '@mui/styles';
const theme = makeStyles();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Appbar />
          <Switch>
            <Route path="/index" component={Index} />
            <Route path="/" component={Login} />
          </Switch>
          <ToastContainer />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
