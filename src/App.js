import './App.css';
import { Route, Switch } from 'react-router';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </>
  );
}

export default App;
