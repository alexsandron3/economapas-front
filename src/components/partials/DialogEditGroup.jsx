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
import { editGroup, fetchGroupList } from '../../actions';
import { toast } from 'react-toastify';
class DialogEditGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      groupName: '',
      selectedCities: [],
    };
  }
  componentDidMount() {
    this.setSelectedCities();
  }

  setSelectedCities = () => {
    const {
      group: { groupName, selectedCities, id },
    } = this.props;
    this.setState({
      groupName,
      selectedCities: JSON.parse(selectedCities),
      id,
    });
  };

  handleCities = ({ target }, selecteds, c) => {
    const { selectedCities } = this.state;

    if (selectedCities.length === 5 && target.ariaSelected) return 0;
    this.setState({ selectedCities: selecteds });
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleEdit = () => {
    const { dispatchUpdateGroup } = this.props;
    const { groupName } = this.state;
    if (groupName.length) {
      dispatchUpdateGroup(this.state);
    } else {
      toast.error('Por favor, insira um nome para o grupo!', {
        pauseOnFocusLoss: false,
      });
    }
  };

  render() {
    const { groupName, selectedCities } = this.state;
    const { showEdit, handleCloseEdit } = this.props;
    return (
      <>
        <Dialog
          open={showEdit || false}
          onClose={() => handleCloseEdit('showEdit')}
        >
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
              renderOption={(props, option, event) => (
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
              <Button onClick={() => handleCloseEdit('showEdit')}>
                Cancelar
              </Button>
              <Button onClick={this.handleEdit}>Salvar</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateGroup: (values) => dispatch(editGroup(values)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DialogEditGroup);
