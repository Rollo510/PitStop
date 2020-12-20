import React from 'react'
import { connect } from 'react-redux'
import { getTrips, clearMarkers, getStops, changeCurrentTrip } from '../../redux/actions/tripActions'
import MapContainer from '../MapContainer'
import "./TripsIndex.css";
import ListGroup from 'react-bootstrap/ListGroup'

class TripsIndex extends React.Component {

    componentDidMount() {
        // this.props.clearMarkers();
    }

    handleClick = (trip_id) => {
        let foundTrip = this.props.trips.find(trip => (trip.id === parseInt(trip_id)))
        this.props.changeCurrentTrip(foundTrip);
        return foundTrip
    }

    render() {
        const allTrips = this.props.trips.map(trip => {
            return (
            <ListGroup.Item as="li"
            onClick={(e) => this.handleClick(e.target.id)} 
            key={trip.id} id={trip.id} name={trip.name} 
            className={(this.props.current_trip != null && trip.id === this.props.current_trip.id ? "selected" : "")}
            >
            {trip.name}
            </ListGroup.Item>
            )
        })


        return (
            <div className="trips-index-container">
                <h1 className="trip-list-header"> All Trips </h1>
                <div className="trips-index-children">
                    <MapContainer />
                    <div className="trip-list-container">
                        <ListGroup as="ul" id="trip-list">
                            {allTrips}
                        </ListGroup>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        trips: state.trips,
        stops: state.stops,
        current_trip: state.current_trip
    }
}


export default connect(mapStateToProps, { getTrips, clearMarkers, getStops, changeCurrentTrip })(TripsIndex)