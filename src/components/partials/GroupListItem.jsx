import React, { Component } from 'react';
import { List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import DialogNewGroup from './DialogNewGroup';
import DialogEditGroup from './DialogEditGroup';
class GroupListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      groupName: '',
      selectedCities: [],
    };
  }

  handleClickOpen = () => {
    this.setState({ showEdit: true });
    const { group, index } = this.props;

    // console.log(group);
  };

  handleClickClose = () => {
    this.setState({ showEdit: false });
  };
  render() {
    const { group, index } = this.props;
    const { showEdit } = this.state;
    return (
      <>
        <List>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={this.handleClickOpen}
              >
                <EditIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${group.groupName}`}
              secondary={`Quantidade de cidades selecionadas: ${group.selectedCities.length}`}
            />
          </ListItem>
        </List>
        {this.state.showEdit && (
          <DialogEditGroup
            index={index}
            showEdit={showEdit}
            group={group}
            handleClickOpen
            handleClickClose={this.handleClickClose}
          />
        )}
      </>
    );
  }
}

export default GroupListItem;
