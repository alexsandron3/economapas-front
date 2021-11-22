import React, { Component } from 'react';
import { Redirect } from 'react-router';
import isLoggedin from '../../helpers/isLoggedin';
import Content from '../partials/Content';
import Button from '@mui/material/Button';
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputLabel,
  FormControl,
  TextField,
  Autocomplete,
  Checkbox,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { cities } from '../../helpers/ufList';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      selectedCities: [],
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickClose = () => {
    this.setState({ open: false });
  };

  handleCities = ({ target }, selecteds, c) => {
    const { selectedCities } = this.state;

    if (selectedCities.length === 5 && target.ariaSelected) return 0;
    this.setState({ selectedCities: selecteds });
    // console.log(a.target.ariaSelected);
  };
  render() {
    if (!isLoggedin()) return <Redirect push to="/" />;
    const { open, selectedCities } = this.state;

    return (
      <Content cardTitle={'Painel'}>
        <Button variant="outlined" onClick={this.handleClickOpen}>
          Criar novo grupo
        </Button>
        <Dialog fullScreen open={open} onClose={this.handleClickClose}>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.handleClickClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Novo grupo
              </Typography>
              <Button autoFocus color="inherit">
                Salvar
              </Button>
            </Toolbar>
          </AppBar>

          <FormControl sx={{ m: 2 }}>
            <Autocomplete
              multiple
              value={selectedCities}
              id="selectedCities"
              options={cities}
              disableCloseOnSelect
              getOptionLabel={(option) => option}
              renderOption={(props, option, { selected }) => {
                console.log(props);
                return <li {...props}>{option}</li>;
              }}
              renderInput={(params) => (
                <TextField {...params} label="Cidades" placeholder="Cidades" />
              )}
              onChange={(a, selecteds, c) => this.handleCities(a, selecteds, c)}
            />
          </FormControl>
        </Dialog>
      </Content>
    );
  }
}

export default Index;
