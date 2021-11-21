import React, { Component } from 'react';
import { Redirect } from 'react-router';
import isLoggedin from '../../helpers/isLoggedin';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!isLoggedin()) return <Redirect push to="/" />;

    return 1;
  }
}

export default Index;
