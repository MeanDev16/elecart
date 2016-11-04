'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://elecart-5307:rlYkKlJRiGcEuRHGNOCh@elecart-5307.mongo.dbs.appsdeck.eu:30155/elecart-5307' || 'mongodb://user1:user1@ds153845.mlab.com:53845/heroku_wn6prhj7' || 'mongodb://localhost/shopnx-dev'
  },

  seedDB: true
};



// scalingo : 'mongodb://elecart-6653:1d_gH_PX6SS6PqvVwwaA@elecart-6653.mongo.dbs.appsdeck.eu:30444/elecart-6653' 