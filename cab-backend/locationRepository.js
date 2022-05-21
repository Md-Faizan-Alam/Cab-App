const Repository = require('../../../CRUD/Repository.js');

const locationRepository = new Repository('cab_car', {
    location_id: 'Integer',
    name: 'String'
});

module.exports = locationRepository;