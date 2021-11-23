import React, { Component } from 'react';
import { List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import DialogEditGroup from './DialogEditGroup';
import DialogConfirmation from './DialogConfirmation';
class GroupListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      showDelete: false,
      groupName: '',
      selectedCities: [],
    };
  }

  handleOpenEdit = (state) => {
    // console.log(mode);
    this.setState({ [state]: true });
  };

  handleCloseEdit = (state) => {
    this.setState({ [state]: false });
  };
  render() {
    const { group, index } = this.props;
    const { showEdit, showDelete } = this.state;
    return (
      <>
        <List>
          <ListItem
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => this.handleOpenEdit('showEdit')}
                  name="edit"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => this.handleOpenEdit('showDelete')}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${group.groupName}`}
              secondary={`Quantidade de cidades selecionadas: ${
                JSON.parse(group.selectedCities).length
              }`}
            />
          </ListItem>
        </List>
        {showEdit && (
          <DialogEditGroup
            index={index}
            showEdit={showEdit}
            group={group}
            handleOpenEdit
            handleCloseEdit={this.handleCloseEdit}
          />
        )}
        {showDelete && (
          <DialogConfirmation
            showDelete={showDelete}
            handleCloseEdit={this.handleCloseEdit}
            group={group}
          />
        )}
      </>
    );
  }
}

export default GroupListItem;
