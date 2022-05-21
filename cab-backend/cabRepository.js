const Repository = require('../../../CRUD/Repository.js');

const cabRepository = new Repository('cab_car', {
    cab_id: 'Integer',
    type: 'String',
    per_km_rate: 'Float',
    driver_id: 'Integer'
});

module.exports = cabRepository;