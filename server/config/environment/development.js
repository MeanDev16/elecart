'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri:  'mongodb://localhost/shopnx-dev' || 'mongodb://user1:user1@ds153845.mlab.com:53845/heroku_wn6prhj7'
  },

  seedDB: true
};
