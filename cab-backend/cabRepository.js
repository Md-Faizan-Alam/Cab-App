const Repository = require('../../../CRUD/Repository.js');

const cabRepository = new Repository('cab_car', {
    cab_id: 'Integer',
    type: 'String',
    per_km_rate: 'Float'
});

module.exports = cabRepository;