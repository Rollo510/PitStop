function tripReducer(state = { trips: [], stops: [] }, action) {
    switch(action.type) {

        case "FETCH_TRIPS_SUCCESS":
            return {...state, trips: action.payload };

        case "ADD_TRIP":
            return {...state, trips: [...state.trips, action.payload]}

        case "ADD_STOP":
            return { ...state, stops: [...state.stops, action.payload]}

        default:
            return state;
    }
}

export default tripReducer