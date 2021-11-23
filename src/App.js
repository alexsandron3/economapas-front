import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './components/pages/Login';
import Index from './components/pages/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appbar from './components/partials/Appbar';
import { connect } from 'react-redux';
import isLogged from './helpers/isLoggedin';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      userReducer: { isLoggedin },
    } = this.props;
    console.log(isLoggedin);
    return (
      <>
        {isLoggedin && <Appbar />}
        {isLogged() && <Appbar />}

        <Switch>
          <Route path="/index" component={Index} />
          <Route path="/" component={Login} />
        </Switch>
        <ToastContainer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(App);
