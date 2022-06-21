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
    return queryInterface.bulkInsert('Comments', [
      {
        content: 'A dramatic scene, wonderful perspective from the drone',
        userId: 1,
        photoId: 2
      },
      {
        content: 'A dramatic scene, wonderful perspective from the drone',
        userId: 2,
        photoId: 2
      },
      {
        content: 'Truly amazing image',
        userId: 3,
        photoId: 1
      },
      {
        content: 'Fantastique paysage',
        userId: 1,
        photoId: 1
      },
      {
        content: 'What an exotic shot. Congratulations.',
        userId: 2,
        photoId: 1
      },
      {
        content: 'Beautiful work...',
        userId: 5,
        photoId: 1
      },
      {
        content: 'Excellent shot. Congratulations on Explore! ',
        userId: 2,
        photoId: 3
      },
      {
        content: 'A fantastic scenery, excellent photograph! ',
        userId: 2,
        photoId: 4
      },
      {
        content: 'masterful! ',
        userId: 3,
        photoId: 4
      },
      {
        content: 'So beautiful. The colors, the lighting,elements. Stunning capture.',
        userId: 3,
        photoId: 5
      },
      {
        content: 'Wonderful capture !!',
        userId: 2,
        photoId: 6
      },
      {
        content: 'This is an excellent addition to Explore',
        userId: 2,
        photoId: 7
      },
      {
        content: 'One of my favorite Explored pictures of today!',
        userId: 1,
        photoId: 8
      },
      {
        content: 'Lovely!',
        userId: 1,
        photoId: 9
      },
      {
        content: 'Remember that a photo is not taken but rather “allowed to happen”',
        userId: 1,
        photoId: 10
      },
      {
        content: "Capture life's moments candidly",
        userId: 1,
        photoId: 11
      },
      {
        content: "Nothing is more precious than a captured moment",
        userId: 1,
        photoId: 12
      },
      {
        content: "Capture the raw beauty of nature!",
        userId: 1,
        photoId: 13
      },
      {
        content: "Excellent work! Superb photo! ",
        userId: 2,
        photoId: 13
      },
      {
        content: "Wow! Brilliantly captured and wishing you a wonderful day ",
        userId: 2,
        photoId: 14
      },
      {
        content: "So Very Beautiful !!! ",
        userId: 5,
        photoId: 15
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
