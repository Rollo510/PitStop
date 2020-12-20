import React from 'react'
import { connect } from 'react-redux'
import { createTrip, getStops, getTrips } from '../redux/actions/tripActions'
import StopForm from './StopForm'
import '../index.css';
import { withRouter } from 'react-router-dom'

class TripForm extends React.Component {

    state = {
        username: "",
        tripName: "",
    }

    submit = (e) => {
        e.preventDefault();
        let newValue = this.getValueOfName(e);
        this.props.createTrip(this.state, newValue)
        this.props.history.push("/trips")
    }

    getValueOfName = (e) => {
        let newArray = []
        for (let i = 0; i < e.target.querySelectorAll(".stop-form").length; i++) {
            let element = e.target.querySelectorAll(".stop-form")
            const newObj = {}
            let name = element[i].children[0].name.value
            let review = element[i].children[0].review.value
            let marker = this.props.markers[i]
            newObj['lat'] = marker.position.lat
            newObj['lng'] = marker.position.lng
            newObj['name'] = name
            newObj['review'] = review
            newArray.push(newObj)
        }
        return newArray
    }

    generateMarkerForms = () => {
        return this.props.markers.map(
            marker => {
                return (
                    <StopForm
                        key={marker.id}
                        name={this.state.name}
                        review={this.state.review}
                        lat={marker.position.lat}
                        lng={marker.position.lng}
                        submit={this.submit}
                    />
                )
            }
        )
    }

    render() {
        return (
            <div id="trip-form">
                <div id="trip-input">
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
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        markers: state.markers
    }
}

export default withRouter(connect(mapStateToProps, { createTrip, getStops, getTrips })(TripForm))