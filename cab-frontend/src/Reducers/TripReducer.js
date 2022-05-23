export const TripReducer = (trip = '', action) => {
    switch (action.type) {
        case 'SET_RIDE':
            const locationMap = {
                Exide: 0,
                Shyambazar: 1,
                Narkelbagan: 2,
                CityCenter1: 3,
                JodhpurPark: 4,
                EMBypass: 5,
                DumDum: 6,
                QuestMall: 7,
                Khidderpore: 8
            }
            const distance = Math.abs(locationMap[action.from] - locationMap[action.to]);

            trip = {
                fare: null,
                distance: distance,
                from_time: action.fromTime,
                to_time: action.fromTime,
                from_location: action.from,
                to_location: action.to,
                ride: action.ride,
                customer_id: action.customerId,
                driver_id: null
            }

            localStorage.setItem('trip',JSON.stringify(trip));
            return trip;

            case 'UPDATE_RIDE':
                // trip = JSON.parse(localStorage.getItem('trip'));
                console.log('Before '+trip);
                trip = action.trip;
                console.log('After '+trip);
                console.log('Driver Id is '+action.driverId);
                trip.driver_id = action.driverId;
                // trip.driver_id = 23;
                
            const carMap = {
                SUV: 300,
                Swift: 200,
                Sedan: 150,
                Toyota: 400,
                Dzire: 250
            }

            const perKmRate = carMap[action.carType];
            console.log('Per Km '+ perKmRate);
            console.log('Distance is  '+ trip.distance);
            trip.fare = parseInt(trip.distance) * parseInt(perKmRate);
            trip.fare = 500;
            console.log(trip);

            localStorage.setItem('trip',trip);
            return trip;

            default:
                localStorage.getItem('trip');
            return trip;
    }
}