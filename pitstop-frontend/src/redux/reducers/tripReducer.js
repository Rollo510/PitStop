function tripReducer(state = { trips: [], stops: [], markers: [], current_trip: null, current_stop: {}, current_stops: [], users: [] }, action) {
    switch(action.type) {

        case "FETCH_TRIPS_SUCCESS":
            return {...state, trips: action.payload }

        case "FETCH_STOPS_SUCCESS":
            return {...state, stops: action.payload }

        case "FETCH_USERS_SUCCESS":
            return { ...state, users: action.payload }

        case "ADD_TRIP":
            return {...state, trips: [...state.trips, action.payload.trip], stops: [...state.stops, ...action.payload.stops]}

        case "ADD_STOP":
            return { ...state, stops: [...state.stops, action.payload]}

        case "STORE_MARKERS":
            return { ...state, markers: [...state.markers, action.payload] }

        case "CLEAR_MARKERS":
            return {...state, markers: [] }
        
        case "CHANGE_CURRENT_TRIP":
            const current_stops = state.stops.filter(stop => stop.trip_id === action.payload.id)
            const markers = current_stops.map(stop => {
                return { position: {lat: stop.lat, lng: stop.lng} }
            })
            return { ...state, current_trip: action.payload, current_stops, markers }

        case "CHANGE_CURRENT_STOP":
            return { ...state, current_stop: action.payload, markers: [{position: {lat: action.payload.lat, lng: action.payload.lng}}] }

        default:
            return state;
    }
}

export default tripReducer