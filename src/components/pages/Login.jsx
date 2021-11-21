import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { newLogin } from '../../actions';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  // componentDidMount() {
  //   const { dispatchLogin } = this.props;
  //   console.log(this.state);
  //   dispatchLogin(this.state);
  // }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatchLogin } = this.props;
    console.log(this.state);
    dispatchLogin(this.state);
  };

  render() {
    const { username, password } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box
            component="form"
            onSubmit={this.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuário"
              name="username"
              onChange={this.handleChange}
              value={username}
              // autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
              value={password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logar-se
            </Button>
            <ToastContainer />
          </Box>
        </Box>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (values) => dispatch(newLogin(values)),
});

export default connect(null, mapDispatchToProps)(Login);
