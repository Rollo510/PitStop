import React from 'react'
import "./StopsIndex.css";
import { connect } from 'react-redux'
import { getTrips, clearMarkers, getStops, changeCurrentStop } from '../../redux/actions/tripActions'
import MapContainer from '../MapContainer'
import ListGroup from 'react-bootstrap/ListGroup'
import Marker from 'google-maps-react'

class StopsIndex extends React.Component {

    handleClick = (stop_id) => {
        let foundStop = this.props.stops.find(stop => (stop.id === parseInt(stop_id)))
        this.props.changeCurrentStop(foundStop);
        this.generateMarker();
        return foundStop
    }

    generateMarker = () => {
        return (
            <Marker position={{ lat: this.props.current_stop.lat, lng: this.props.current_stop.lng }} />
        )
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
        markers: state.markers,
        current_stop: state.current_stop
    }
}


export default connect(mapStateToProps, { getTrips, clearMarkers, getStops, changeCurrentStop })(StopsIndex)