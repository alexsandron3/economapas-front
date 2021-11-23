import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Redirect } from 'react-router';

class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  logout = () => {
    localStorage.removeItem('userInfo');
    this.setState({ redirect: true });
  };
  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect push to="/" />;
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Início
              </Typography>
              <Button color="inherit" onClick={this.logout}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
  }
}

export default Appbar;
