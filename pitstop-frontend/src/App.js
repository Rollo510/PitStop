import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import TripsIndex from './components/TripsIndex'
import TripForm from './components/TripForm'
import StopsIndex from './components/StopsIndex'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/trips" component={TripsIndex} />
              <Route path="/trips/new" component={TripForm} />
              <Route path="/stops" component={StopsIndex} />
              {/* <Route path="/signUp" component={SignUp} />
              <Route path="/signIn" component={SignIn} /> */}
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
