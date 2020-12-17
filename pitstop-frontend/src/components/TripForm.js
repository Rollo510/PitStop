import React from 'react'
import { connect } from 'react-redux'
import { createTrip } from '../redux/actions/tripActions'
import StopForm from './StopForm'
import '../index.css';

class TripForm extends React.Component {

    state = {
        username: "",
        tripName: "",
        stops: []
    }

    submit = (e) => {
        e.preventDefault();
        this.props.createTrip(this.state);
        this.setState({
            username: "",
            tripName: ""
        });
        this.props.history.push("/trips")
    }

    generateMarkerForms = () => {
        return this.props.markers.map(
            marker => {
                return (
                    <StopForm
                        key={marker.id}
                        position={{ lat: marker.position.lat, lng: marker.position.lng }}
                        submit={this.submit}
                    />
                )
            }
        )
    }

    render() {
        return (
            <div id="trip-form">
                <h1> Create a new Trip: </h1>
                <form onSubmit={this.submit}>
                    username: {" "}
                    <input
                        onChange={(e) => this.setState({ username: e.target.value })}
                        type="text"
                        value={this.state.name}
                    />
                    tripName: {" "}
                    <input 
                        onChange={(e) => this.setState({ username: e.target.value })}
                        type="text"
                        value={this.state.tripName}
                    />
                    { this.generateMarkerForms() }
                    <input type="submit" value="Create New Trip" />
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        markers: state.markers
    }
}

export default connect(mapStateToProps, { createTrip })(TripForm)