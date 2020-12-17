function tripReducer(state = { trips: [], stops: [], markers: [] }, action) {
    switch(action.type) {

        case "FETCH_TRIPS_SUCCESS":
            return {...state, trips: action.payload };

        case "FETCH_STOPS_SUCCESS":
            return {...state, stops: action.payload}

        case "ADD_TRIP":
            return {...state, trips: [...state.trips, action.payload]}

        case "ADD_STOP":
            return { ...state, stops: [...state.stops, action.payload]}

        case "STORE_MARKERS":
            return { ...state, markers: [...state.markers, action.payload] }

        default:
            return state;
    }
}

export default tripReducer