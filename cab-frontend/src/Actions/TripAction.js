import axios from "axios";

export const setRide = (trip) => {
    return{
        type: 'SET_RIDE',
        trip: trip
    }
}

export const postTrip = (trip) =>{
    return async(dispatch) => {
        localStorage.setItem('trip',trip);
        const response = await axios.post('http://localhost:3333/postTrip',trip);
        console.log('RESULT Data: ', response.data);
        // dispatch(getDriver(trip.driver_id));
        // dispatch(setStage('confirm'));
        dispatch({
            type: 'POST_RIDE',
            payload: response.data
        })
    }
}