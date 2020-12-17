import React from 'react'
import { connect } from 'react-redux'
import { createTrip } from '../redux/actions/tripActions'
import StopForm from './StopForm'
import '../index.css';

class TripForm extends React.Component {

    state = {
        username: "",
        tripName: "",
        name: "",
        review: ""
    }

    submit = (e) => {
        e.preventDefault();
        debugger
        this.props.createTrip(this.state);
        this.setState({
            username: "",
            tripName: "",
            name: "",
            review: ""
        });
        // this.props.history.push("/trips")
    }

    generateMarkerForms = () => {
        return this.props.markers.map(
            marker => {
                return (
                    <StopForm
                        key={marker.id}
                        name={this.state.name}
                        review={this.state.review}
                        onChange={(e) => this.setState({ 
                            [e.target.name]: e.target.value
                            })}
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
                    Username: {" "}
                    <input
                        onChange={(e) => this.setState({ username: e.target.value })}
                        type="text"
                        value={this.state.username}
                    />
                    Name your Trip: {" "}
                    <input 
                        onChange={(e) => this.setState({ tripName: e.target.value })}
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