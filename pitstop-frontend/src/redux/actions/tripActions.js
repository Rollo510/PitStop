export const getTrips = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/trips")
        .then(resp => resp.json())
        .then(trips => dispatch({ type: "FETCH_TRIPS_SUCCESS", payload: trips })
        )}
}

export const createTrip = (data) => {
    return (dispatch) => {
        fetch("http://localhost:3000/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ trip: data }),
        })
            .then(resp => resp.json())
            .then(trip => 
                dispatch({ type: "ADD_TRIP", payload: trip })
            )
    }
}

export const newStop = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/stops', {
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

