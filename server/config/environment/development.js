'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri:  'mongodb://shopcart-30:oiY2UVk2fe6NotF8f_q7@shopcart-30.mongo.dbs.appsdeck.eu:30059/shopcart-30' || 'mongodb://localhost/shopnx-dev' || 'mongodb://user1:user1@ds143737.mlab.com:43737/heroku_6pmmkn6c'
  },

  seedDB: true
};
