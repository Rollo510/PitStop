export const getTrips = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/trips")
        .then(resp => resp.json())
        .then(trips => dispatch({ type: "FETCH_TRIPS_SUCCESS", payload: trips })
        )}
}

export const createTrip = (data, newValue, locations) => {
    return (dispatch) => {
        const newHash = {
            username:data.username,
            tripName:data.tripName,
            stops:newValue,
            locations
        }
        fetch("http://localhost:3001/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newHash),
        })
            .then(resp => resp.json())
            .then(trip => 
                dispatch({ type: "ADD_TRIP", payload: trip })
            )
    }
}

export const getStops = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/stops")
            .then(resp => resp.json())
            .then(trips => dispatch({ type: "FETCH_STOPS_SUCCESS", payload: trips })
            )
    }
}

export const newStop = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/stops', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(stop => dispatch({ type: 'ADD_STOP', payload: stop}))
    }
}

export const storeMarkers = (data) => {
    return (dispatch) => {
        dispatch( {type: "STORE_MARKERS", payload: data })
    }
}

