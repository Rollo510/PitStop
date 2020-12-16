import React from 'react'
import { connect } from 'react-redux'
import { getTrips } from '../redux/actions/tripActions'

class TripsIndex extends React.Component {
    
    componentDidMount() {
        this.props.getTrips();
    }
    
    render() {
        return (
            <div>
                <h1> All Trips </h1>
            </div>
        )
    }


}


export default connect(null, { getTrips } )(TripsIndex)