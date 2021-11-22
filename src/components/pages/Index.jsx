import React, { Component } from 'react';
import { Redirect } from 'react-router';
import isLoggedin from '../../helpers/isLoggedin';
import Content from '../partials/Content';
import { Box, Typography } from '@mui/material';

import GroupListItem from '../partials/GroupListItem';
import DialogNewGroup from '../partials/DialogNewGroup';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';

class Index extends Component {
  render() {
    const {
      groupReducer: { groupList },
    } = this.props;
    if (!isLoggedin()) return <Redirect push to="/" />;

    return (
      <Content cardTitle={'Painel'}>
        <Box ml={3}>
          <Typography color="initial" variant="h5">
            Lista de grupos
          </Typography>
        </Box>
        {groupList.map((group, index) => (
          <GroupListItem key={nanoid()} index={index} group={group} />
        ))}
        <DialogNewGroup />
      </Content>
    );
  }
}
// groupReducer.groupList[groupReducer.groupIndex]

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Index);
