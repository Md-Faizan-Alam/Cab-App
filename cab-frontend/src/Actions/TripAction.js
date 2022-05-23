export const setRide = (from,to,ride,customerId) => {
     const fromTime = Date.now();
    return{
        type: 'SET_RIDE',
        from: from,
        to: to ,
        ride: ride,
        customerId: customerId,
        fromTime: fromTime
    }
}

export const updateRide = (driverId,carType,trip) => {
    return{
        type: 'UPDATE_RIDE',
        driverId: driverId,
        carType: carType,
        trip: trip
    }
}