export const getTrips = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/trips')
        .then(resp => resp.json())
        .then(trips => dispatch({ type: 'FETCH_TRIPS_SUCCESS', payload: trips })
        )}
}
