function tripReducer(state = { all: [] }, action) {
    switch(action.type) {

        case "FETCH_TRIPS_SUCCESS":
            return {...state, all: action.payload };
        default:
            return state;
    }
}

export default tripReducer