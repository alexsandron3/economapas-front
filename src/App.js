import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Login from './components/pages/Login';
import Index from './components/pages/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/index" component={Index} />
          <Route path="/" component={Login} />
        </Switch>
        <ToastContainer />
      </>
    );
  }
}

export default App;
