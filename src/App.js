import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Nav.js';
import Home from './Home.js'
import PokeList from './PokeList';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="list">
          <PokeList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
