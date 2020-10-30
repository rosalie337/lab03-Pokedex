import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home.js'
import PokeList from './PokeList';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <PokeList />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
