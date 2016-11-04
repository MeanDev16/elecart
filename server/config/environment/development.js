'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri:  'mongodb://localhost/shopnx-dev' || 'mongodb://user1:user1@ds143737.mlab.com:43737/heroku_6pmmkn6c'
  },

  seedDB: true
};
