export const TripReducer = (trip = '', action) => {
    switch (action.type) {
        case 'SET_RIDE':
            trip = action.trip;
            for(let key in trip){
                console.log(`${key} : ${trip[key]}`);
            }
            localStorage.setItem('trip', trip);
            return trip;
        case 'POST_RIDE':
            trip = localStorage.getItem('trip');
            return trip;
        default:
            trip = localStorage.getItem('trip');
            console.log('Default Trip');
            return trip;
    }
}