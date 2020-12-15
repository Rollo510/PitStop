import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import TripsIndex from './components/TripsIndex'
import TripForm from './components/TripForm'
import StopsIndex from './components/StopsIndex'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trips" component={TripsIndex} />
          <Route path="/trips/new" component={TripForm} />
          <Route path="/stops" component={StopsIndex} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
