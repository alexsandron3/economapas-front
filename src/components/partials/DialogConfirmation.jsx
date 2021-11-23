import React, { Component } from 'react';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Dialog,
} from '@mui/material';
import { connect } from 'react-redux';
import { fetchGroupList, removeGroup } from '../../actions';

class DialogConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDelete = () => {
    const {
      dispatchDelete,
      group: { id },
    } = this.props;
    dispatchDelete(id);
  };
  render() {
    const { showDelete, handleCloseEdit } = this.props;
    return (
      <>
        <Dialog
          open={showDelete || false}
          onClose={() => handleCloseEdit('showDelete')}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Deletar grupo?'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Você deseja mesmo deletar este grupo?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDelete}>Sim</Button>
            <Button autoFocus onClick={() => handleCloseEdit('showDelete')}>
              Não
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const mapDispatchToPros = (dispatch) => ({
  dispatchDelete: (id) => dispatch(removeGroup(id)),
});

export default connect(null, mapDispatchToPros)(DialogConfirmation);
