import React, { Component } from 'react';
import { Redirect } from 'react-router';
import isLoggedin from '../../helpers/isLoggedin';
import Content from '../partials/Content';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!isLoggedin()) return <Redirect push to="/" />;

    return <Content cardTitle={'Painel'}></Content>;
  }
}

export default Index;
