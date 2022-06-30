'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Albums', [
    {
      albumName: 'Wallpaper',
      userId: 1
    }, 
    {
      albumName: 'Travel',
      userId: 1
    }, {
      albumName: 'Wallpaper',
      userId: 2
    }
      , {
      albumName: 'Wallpaper',
      userId: 3
    }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
