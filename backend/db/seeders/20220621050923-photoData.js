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
    return queryInterface.bulkInsert('Photos', [{
      title: 'Snow Mountain in Italy',
      description: "The cliff's sheer drop created a natural defense against any intruders in addition to providing a view that was breathtaking by day or night.",
      imgURL: 'https://images.unsplash.com/photo-1623333769926-a34d46b5fbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
      userId: 1
    }, {
      title: 'Mountain in fog',
      description: "Life is abundant, and life is beautiful. And it's a good place that we're all in, you know, on this earth, if we take care of it.",
      imgURL: 'https://images.unsplash.com/photo-1654475677192-2d869348bb4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      userId: 2
    },
    {
      title: 'Night sky',
      description: "This is how we imagine the night sky to be",
      imgURL: 'https://images.unsplash.com/photo-1652900439414-c0e834dcfa2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      userId: 3
    },
    {
      title: 'Nature waterfalls',
      description: "That leap down hill and dale.",
      imgURL: 'https://images.unsplash.com/photo-1653745445937-2928f925919d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      userId: 1
    },
    {
      title: 'Yosemite National Park',
      description: "I arrived in Yosemite at 5:20 a.m. in order to catch the sunrise at Tunnel View, but the clouds ruined the view. So I wandered the valley for some other sight to behold and found this beautiful reflection in the flooded waters of Yosemite valley.",
      imgURL: 'https://images.unsplash.com/photo-1562310503-a918c4c61e38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      userId: 1
    },
    {
      title: 'Streaming Past',
      description: "Standing on a tall hill, we watch the coastal fog stream past below us, lit by the setting sun.",
      imgURL: 'https://live.staticflickr.com/65535/52136201437_da29b28906_k.jpg',
      userId: 1
    },
    {
      title: 'Namafjall Geothermic Area',
      description: "After walking around for some time suddenly (as happens in Icelandic weather) the clouds broke and the colours showed whilst the backgound remained in the shade. A very lucky development to show the area at its best!",
      imgURL: 'https://live.staticflickr.com/65535/52138644964_8895cae90f_5k.jpg',
      userId: 1
    },
    {
      title: 'LOCH DUICH.',
      description: "Eilean Donan Castle. Highland. Scotland.",
      imgURL: 'https://live.staticflickr.com/65535/52136259564_5c0c46e207_k.jpg',
      userId: 1
    },
    {
      title: 'Two deers',
      description: "Two deer in front of Half Dome in Yosemite Valley during sunset. I spent the evening in Yosemite Valley watching the sun go down on Half Dome when a couple of deer walked toward me.",
      imgURL: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1904&q=80',
      userId: 2
    },
    {
      title: 'Yellow Stone National Park',
      description: "Photo taken by James Fitzerald",
      imgURL: 'https://images.unsplash.com/photo-1554748794-953974aa06da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      userId: 2
    },
    {
      title: 'Winter at Yellow Stone National Park',
      description: "Photo taken by Trevor Hayes",
      imgURL: 'https://images.unsplash.com/photo-1582400198814-5d2dd197ef60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80',
      userId: 5
    },
    {
      title: 'Beautiful day!',
      description: "Capture love, joy, and everything in between",
      imgURL: 'https://images.unsplash.com/photo-1655139294116-0cf4b0d1d883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      userId: 4
    },
    {
      title: 'Precarious',
      description: "This to me seems to be the perfect description of this scene, with the Old Man Of Storr somehow continually defying gravity to cling on despite being on a steep slope and it having a lot of its base eroded away....",
      imgURL: 'https://live.staticflickr.com/65535/52152793929_70e4b39cee_k.jpg',
      userId: 1
    },
    {
      title: 'Mt. Bachelor',
      description: "Looking across a snow-covered Elk Lake at this iconic volcanic peak. Central Oregon with it's many volcanic peaks is magnificent.",
      imgURL: 'https://live.staticflickr.com/65535/52151279307_e557b18948_k.jpg',
      userId: 1
    },
    {
      title: 'Summer Calling',
      description: "The old windmill of Eickhorst in mid June, Kreis Minden Lübbecke, Ostwestfalen, Germany",
      imgURL: 'https://live.staticflickr.com/65535/52152780523_60c34ac588_5k.jpg',
      userId: 1
    },
    {
      title: 'Lonely boat at sunset',
      description: "Get lost in wonderful everyday moments",
      imgURL: 'https://images.unsplash.com/photo-1652447385283-817463bd31af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
      userId: 1
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
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
