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
class DialogEditGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      selectedCities: [],
    };
  }
  componentDidMount() {
    const { showEdit } = this.props;
    showEdit && this.setSelectedCities();
  }

  setSelectedCities = () => {
    const { groupReducer, index } = this.props;
    console.log(groupReducer);
    this.setState({ ...groupReducer.groupList[index] });
  };

  handleCities = ({ target }, selecteds, c) => {
    const { selectedCities } = this.state;

    if (selectedCities.length === 5 && target.ariaSelected) return 0;
    this.setState({ selectedCities: selecteds });
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });
  render() {
    const { groupName, selectedCities } = this.state;
    const { showEdit, handleClickClose } = this.props;
    return (
      <>
        <Dialog open={showEdit || false} onClose={() => handleClickClose()}>
          <DialogContent>
            <DialogTitle>Editar grupo </DialogTitle>

            <Box mb={1}>
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
            <DialogContentText mt={2} mb={1}>
              Selecione até 5 cidades para adicionar ao seu grupo:
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
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    label="Cidades"
                    placeholder="Cidades"
                  />
                );
              }}
              onChange={(a, selecteds, c) => this.handleCities(a, selecteds, c)}
            />

            <DialogActions>
              <Button onClick={this.handleClickClose}>Cancelar</Button>
              <Button onClick={this.handleClickClose}>Salvar</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(DialogEditGroup);
