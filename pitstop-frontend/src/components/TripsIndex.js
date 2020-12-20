import React from 'react'
import { connect } from 'react-redux'
import { getTrips, clearMarkers, getStops, changeCurrentTrip } from '../redux/actions/tripActions'
import MapContainer from './MapContainer'


class TripsIndex extends React.Component {
    
    componentDidMount() {
        this.props.getTrips();
        this.props.clearMarkers();
        this.props.getStops();
    }

    handleClick = (trip_id) => {
        let foundTrip = this.props.trips.find(trip => (trip.id === parseInt(trip_id)))
        this.props.changeCurrentTrip(foundTrip);
        return foundTrip
    }
    
    render() {
        const allTrips = this.props.trips.map(trip => {
            return (<li onClick={(e) => this.handleClick(e.target.id)} key={trip.id} id={trip.id} name={trip.name}>{trip.name}</li>)
        })


        return (
            <div>
                <h1> All Trips </h1>
                <ul id="trip-list">
                    {allTrips}
                </ul>
                <MapContainer />
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


export default connect(mapStateToProps, { getTrips, clearMarkers, getStops, changeCurrentTrip } )(TripsIndex)