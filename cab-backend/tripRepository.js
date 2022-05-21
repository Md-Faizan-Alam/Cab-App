const Repository = require('../../../CRUD/Repository.js');

const tripRepository = new Repository('cab_user', {
    trip_id: 'Integer',
    fare: 'Float',
    distance: 'Integer',
    from_time: 'String',
    to_time: 'String',
    from_location: 'String',
    to_location: 'String',
    customer_id: 'Integer',
    driver_id: 'Integer'
});

module.exports = tripRepository;

// create table trips (trip_booking_id  serial not null, fare float4, distance_in_km float4, from_time timestamp, from_location varchar(255), to_time timestamp, to_location varchar(255), customer_user_id int4, driver_user_id int4, primary key (trip_booking_id))