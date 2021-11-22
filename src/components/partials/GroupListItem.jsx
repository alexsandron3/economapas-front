import React, { Component } from 'react';
import { List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';

class GroupListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <List>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Nome da cidade"
            secondary="Quantidade de cidades selecionadas"
          />
        </ListItem>
        ,
      </List>
    );
  }
}

export default GroupListItem;
