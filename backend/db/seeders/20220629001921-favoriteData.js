'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Favorites', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Favorites', [{
      userId: 5,
      photoId: 1
    }, {
      userId: 4,
      photoId: 2
    }, {
      userId: 1,
      photoId: 3
    }, {
      userId: 2,
      photoId: 4
    }, {
      userId: 3,
      photoId: 5
    }, {
      userId: 2,
      photoId: 6
    }, {
      userId: 1,
      photoId: 7
    }, {
      userId: 4,
      photoId: 8
    }, {
      userId: 3,
      photoId: 9
    }, {
      userId: 1,
      photoId: 10
    }, {
      userId: 5,
      photoId: 11
    }, {
      userId: 3,
      photoId: 12
    }, {
      userId: 2,
      photoId: 13
    }, {
      userId: 1,
      photoId: 14
    }, {
      userId: 4,
      photoId: 15
    }, {
      userId: 2,
      photoId: 16
    }, {
      userId: 3,
      photoId: 17
    }, {
      userId: 5,
      photoId: 18
    }, {
      userId: 3,
      photoId: 1
    }, {
      userId: 5,
      photoId: 2
    }, {
      userId: 2,
      photoId: 3
    }, {
      userId: 1,
      photoId: 4
    }, {
      userId: 2,
      photoId: 5
    }, {
      userId: 4,
      photoId: 6
    }, {
      userId: 5,
      photoId: 7
    }, {
      userId: 2,
      photoId: 8
    }, {
      userId: 1,
      photoId: 9
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
    return queryInterface.bulkDelete('Favorites', null, {});
  }
};
