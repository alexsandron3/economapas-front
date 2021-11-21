import './App.css';
import { Route, Switch } from 'react-router';
import Login from './components/pages/Login';
import Index from './components/pages/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/index" component={Index} />
        <Route path="/" component={Login} />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
