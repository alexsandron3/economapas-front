import React, { Component } from 'react';
import { Redirect } from 'react-router';
import isLoggedin from '../../helpers/isLoggedin';
import Content from '../partials/Content';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

import GroupListItem from '../partials/GroupListItem';
import DialogNewGroup from '../partials/DialogNewGroup';

class Index extends Component {
  render() {
    if (!isLoggedin()) return <Redirect push to="/" />;

    return (
      <Content cardTitle={'Painel'}>
        <Box ml={3}>
          <Typography variant="h1" color="initial" variant="h5">
            Lista de grupos
          </Typography>
        </Box>
        <GroupListItem />
        <DialogNewGroup />
      </Content>
    );
  }
}

export default Index;
