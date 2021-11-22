import React, { Component } from 'react';
import { cities } from '../../helpers/ufList';
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
} from '@mui/material';
import { connect } from 'react-redux';
import addGroupReq from '../../services/newGroup';
import { newGroup, resetStatus } from '../../actions';
class DialogNewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
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
  };

  handleSend = () => {
    const { groupName, selectedCities } = this.state;
    const storage = JSON.parse(localStorage.getItem('userInfo'));
    const userId = storage.userId;
    const { dispatchNewGroup } = this.props;
    console.log(this.props.groupReducer);

    dispatchNewGroup({ groupName, selectedCities, userId });
    this.setState({ groupName: '', open: false, selectedCities: [] });
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });
  render() {
    const { open, groupName, selectedCities } = this.state;
    return (
      <>
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
            <Box mb={3}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="groupName"
                label="Nome do grupo"
                type="email"
                fullWidth
                variant="outlined"
                onChange={this.handleChange}
                value={groupName}
              />
            </Box>
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
              <Button onClick={this.handleSend}>Salvar</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  dispatchNewGroup: (values) => dispatch(newGroup(values)),
  dispatchResetStatus: () => dispatch(resetStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogNewGroup);
