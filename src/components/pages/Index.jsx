import React, { Component } from 'react';
import { Redirect } from 'react-router';
import isLoggedin from '../../helpers/isLoggedin';
import Content from '../partials/Content';
import { Alert, Box, Typography } from '@mui/material';
import Appbar from '../../components/partials/Appbar';
import GroupListItem from '../partials/GroupListItem';
import DialogNewGroup from '../partials/DialogNewGroup';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchGroupList } from '../../actions';

class Index extends Component {
  componentDidMount() {
    this.fetchGroups();
  }

  fetchGroups = () => {
    const { dispatchRefreshGroupList } = this.props;
    const { userId } = JSON.parse(localStorage.getItem('userInfo'));
    dispatchRefreshGroupList({ userId });
  };

  render() {
    const {
      groupReducer: { groupList, refresh },
    } = this.props;
    if (!isLoggedin()) return <Redirect push to="/" />;
    if (refresh === true) this.fetchGroups();

    return (
      <>
        {isLoggedin() && <Appbar />}

        <Content cardTitle={'Painel'}>
          <Box ml={3}>
            <Typography color="initial" variant="h5">
              Lista de grupos
            </Typography>
          </Box>
          {groupList.length ? (
            groupList.map((group, index) => (
              <GroupListItem key={nanoid()} index={index} group={group} />
            ))
          ) : (
            <Box ml={3} mt={3}>
              <Alert severity="info">Nenhum grupo criado!</Alert>
            </Box>
          )}
          <DialogNewGroup />
        </Content>
      </>
    );
  }
}
const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => ({
  dispatchRefreshGroupList: (userId) => dispatch(fetchGroupList(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
