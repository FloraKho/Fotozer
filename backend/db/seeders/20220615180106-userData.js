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
        username: 'cupertino',
        hashedPassword: bcrypt.hashSync('cupertino')
      },
      {
        email: 'santaclara@gmail.com',
        username: 'santaclara',
        hashedPassword: bcrypt.hashSync('santaclara')
      },
      {
        email: 'sunnyvale@gmail.com',
        username: 'sunnyvale',
        hashedPassword: bcrypt.hashSync('santaclara')
      },
      {
        email: 'sanjose@gmail.com',
        username: 'sanjose',
        hashedPassword: bcrypt.hashSync('sanjose')
      },
      {
        email: 'fremont@gmail.com',
        username: 'fremont',
        hashedPassword: bcrypt.hashSync('fremont')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo_User', 'cupertino', 'santaclara', 'sunnyvale', 'sanjose', 'fremont'] }
    }, {});
  }
};