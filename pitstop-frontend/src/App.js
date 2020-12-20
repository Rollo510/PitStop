import './App.css';
import { connect } from 'react-redux'
import React from 'react';
import Home from './components/Home'
import TripsIndex from './components/trip-list/TripsIndex'
import TripForm from './components/TripForm'
import StopsIndex from './components/StopsIndex'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { getTrips, getStops } from './redux/actions/tripActions'

class App extends React.Component {
  componentDidMount() {
    this.props.getTrips();
    this.props.getStops();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" >PITSTOP</Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem eventkey={1} href="/trips">
                  <Nav.Link as={Link} to="/trips" >Find a Trip!</Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/stops">
                  <Nav.Link as={Link} to="/stops" >Take a Pitstop</Nav.Link>
                </NavItem>
              </Nav>
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trips" component={TripsIndex} />
            <Route path="/trips/new" component={TripForm} />
            <Route path="/stops" component={StopsIndex} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { getTrips, getStops })(App)

