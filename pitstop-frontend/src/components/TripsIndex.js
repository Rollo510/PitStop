import React from 'react'
import { connect } from 'react-redux'
import { getTrips } from '../redux/actions/tripActions'

class TripsIndex extends React.Component {
    
    componentDidMount() {
        this.props.getTrips();
    }
    
    render() {
        const allTrips = this.props.trips.map(trip => {
            return (<li key={trip.id} name={trip.name}>{trip.name}</li>)
        })


        return (
            <div>
                <h1> All Trips </h1>
                <ul>
                    {allTrips}
                </ul>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        trips: state.trips,
    }
}


export default connect(mapStateToProps, { getTrips } )(TripsIndex)