import React, { Component } from 'react';
import { Redirect } from 'react-router';
import isLoggedin from '../../helpers/isLoggedin';
import Content from '../partials/Content';
import Button from '@mui/material/Button';
import {
  Dialog,
  TextField,
  Autocomplete,
  Box,
  DialogContentText,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

import { cities } from '../../helpers/ufList';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
        <Box mt={6} ml={3}>
          <Button variant="outlined" onClick={this.handleClickOpen}>
            Criar novo grupo
          </Button>
        </Box>
        <Dialog open={open} onClose={this.handleClickClose}>
          <DialogContent>
            <DialogTitle>Novo grupo</DialogTitle>

            <DialogContentText>
              Selecione até 5 cidades para adicionar ao seu grupo.
            </DialogContentText>

            <Autocomplete
              multiple
              value={selectedCities}
              id="selectedCities"
              options={cities}
              disableCloseOnSelect
              getOptionLabel={(option) => option}
              renderOption={(props, option, { selected }) => (
                <li {...props}>{option}</li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Cidades" placeholder="Cidades" />
              )}
              onChange={(a, selecteds, c) => this.handleCities(a, selecteds, c)}
            />
            <DialogActions>
              <Button onClick={this.handleClickClose}>Cancelar</Button>
              <Button onClick={this.handleClickClose}>Salvar</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>

        <Typography variant="h1" color="initial"></Typography>
      </Content>
    );
  }
}

export default Index;
