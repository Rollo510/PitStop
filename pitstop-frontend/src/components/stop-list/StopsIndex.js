import React from 'react'
import "./StopsIndex.css";
import { connect } from 'react-redux'
import { getTrips, clearMarkers, getStops, changeCurrentTrip } from '../../redux/actions/tripActions'
import MapContainer from '../MapContainer'
import ListGroup from 'react-bootstrap/ListGroup'


class StopsIndex extends React.Component {


    handleClick = (stop_id) => {
        let foundStop = this.props.stops.find(stop => (stop.id === parseInt(stop_id)))
        this.props.changeCurrentTrip(foundStop);
        return foundStop
    }

    
    render() {

        const allStops = this.props.stops.map(stop => {
            return (
                <ListGroup.Item as="li"
                    onClick={(e) => this.handleClick(e.target.id)}
                    key={stop.id} id={stop.id} name={stop.name}
                >
                    {stop.name}
                </ListGroup.Item>
            )
        })


        return (
            <div className="stops-index-container">
                <h1 className="stop-list-header"> All Stops </h1>
                <div className="stops-index-children">
                    <MapContainer />
                    <div className="stop-list-container">
                        <ListGroup as="ul" id="stop-list">
                            {allStops}
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


export default connect(mapStateToProps, { getTrips, clearMarkers, getStops, changeCurrentTrip })(StopsIndex)