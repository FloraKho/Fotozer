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
        content: 'A dramatic scene, wonderful perspective from the drone!!!!!!',
        userId: 2,
        photoId: 1
      },
      {
        content: 'A dramatic scene, wonderful perspective from the drone',
        userId: 3,
        photoId: 2
      },
      {
        content: 'Truly amazing image',
        userId: 4,
        photoId: 3
      },
      {
        content: 'Fantastique paysage',
        userId: 5,
        photoId: 4
      },
      {
        content: 'What an exotic shot. Congratulations.',
        userId: 1,
        photoId: 5
      },
      {
        content: 'Beautiful work...',
        userId: 5,
        photoId: 6
      },
      {
        content: 'Excellent shot. Congratulations on Explore! ',
        userId: 4,
        photoId: 7
      },
      {
        content: 'A fantastic scenery, excellent photograph! ',
        userId: 2,
        photoId: 8
      },
      {
        content: 'masterful! ',
        userId: 3,
        photoId: 9
      },
      {
        content: 'So beautiful. The colors, the lighting,elements. Stunning capture.',
        userId: 1,
        photoId: 10
      },
      {
        content: 'Wonderful capture !!',
        userId: 3,
        photoId: 11
      },
      {
        content: 'This is an excellent addition to Explore',
        userId: 4,
        photoId: 12
      },
      {
        content: 'One of my favorite Explored pictures of today!',
        userId: 1,
        photoId: 13
      },
      {
        content: 'Lovely!',
        userId: 1,
        photoId: 14
      },
      {
        content: 'Remember that a photo is not taken but rather “allowed to happen”',
        userId: 2,
        photoId: 15
      },
      {
        content: "Capture life's moments candidly",
        userId: 2,
        photoId: 16
      },
      {
        content: "Nothing is more precious than a captured moment",
        userId: 3,
        photoId: 17
      },
      {
        content: "Capture the raw beauty of nature!",
        userId: 5,
        photoId: 18
      },
      {
        content: "Excellent work! Superb photo! ",
        userId: 4,
        photoId: 18
      },
      {
        content: "Wow! Brilliantly captured and wishing you a wonderful day ",
        userId: 2,
        photoId: 17
      },
      {
        content: "So Very Beautiful !!! ",
        userId: 3,
        photoId: 17
      },
      {
        content: "Nice picture.....",
        userId: 5,
        photoId: 16
      },
      {
        content: "incredible!",
        userId: 1,
        photoId: 15
      },
      {
        content: "very nice work!",
        userId: 3,
        photoId: 14
      },
      {
        content: "Stunning!",
        userId: 2,
        photoId: 13
      },
      {
        content: "Gorgeous scenery, beautiful!",
        userId: 5,
        photoId: 12
      }, 
      {
        content: "Excellent shot!",
        userId: 1,
        photoId: 11
      },
      {
        content: "peace",
        userId: 4,
        photoId: 10
      },
      {
        content: "Preciosa captura",
        userId: 5,
        photoId: 9
      },
      {
        content: "Nice captura!",
        userId: 3,
        photoId: 8
      },
      {
        content: "Wonderful mood",
        userId: 1,
        photoId: 7
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
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
