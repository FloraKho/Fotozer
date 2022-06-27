'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demouser@user.io',
        username: 'Demo_User',
        hashedPassword: bcrypt.hashSync('demouser')
      },
      {
        email: 'cupertino@gmail.com',
        username: 'Cupertino',
        hashedPassword: bcrypt.hashSync('cupertino')
      },
      {
        email: 'santaclara@gmail.com',
        username: 'Santa Clara',
        hashedPassword: bcrypt.hashSync('santaclara')
      },
      {
        email: 'sunnyvale@gmail.com',
        username: 'Sunnyvale',
        hashedPassword: bcrypt.hashSync('santaclara')
      },
      {
        email: 'washington@gmail.com',
        username: 'Washington',
        hashedPassword: bcrypt.hashSync('washington')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo_User', 'cupertino', 'santaclara', 'sunnyvale', 'sanjose', 'fremont'] }
    }, {});
  }
};