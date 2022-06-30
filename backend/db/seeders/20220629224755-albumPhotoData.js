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
    return queryInterface.bulkInsert('AlbumPhotos', [
      {
        albumId: 1,
        photoId: 6
      },
      {
        albumId: 1,
        photoId: 16
      },
      {
        albumId: 2,
        photoId: 1
      },
      {
        albumId: 2,
        photoId: 17
      },
      {
        albumId: 3,
        photoId: 2
      },
      {
        albumId: 3,
        photoId: 7
      },
      {
        albumId: 4,
        photoId: 3
      },
      {
        albumId: 4,
        photoId: 8
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
    return queryInterface.bulkDelete('AlbumPhotos', null, {});
  }
};
