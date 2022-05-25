export const TripReducer = (trip = null, action) => {
    switch (action.type) {
        case 'SET_RIDE':
            console.log(typeof (action.trip));
            for (let key in action.trip) {
                console.log(`${key} : ${action.trip[key]}`);
            }
            trip = action.trip;
            // console.log(typeof (trip));
            // for (let key in trip) {
            //     console.log(`${key} : ${trip[key]}`);
            // }
            // localStorage.setItem('trip', trip);
            return trip;
        case 'POST_RIDE':
            // trip = localStorage.getItem('trip');
            return trip;
        default:
            // trip = localStorage.getItem('trip');
            console.log('This is Default');
            console.log(typeof (trip));
            for (let key in trip) {
                console.log(`${key} : ${trip[key]}`);
            }
            console.log('Default Trip');
            return trip;
    }
}