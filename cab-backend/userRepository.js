const Repository = require('../../../CRUD/Repository.js');

const userRepository = new Repository('cab_user', {
    user_id: 'Integer',
    type: 'String',
    first_name: 'String',
    last_name: 'String',
    password: 'String',
    phone: 'String',
    email: 'String',
    driver_license: 'String',
    address: 'String',
    driver_rating: 'Float',
    cab_id: 'Integer'
});

module.exports = userRepository;