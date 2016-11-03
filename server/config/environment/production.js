'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.IP ||
            undefined,

  // Server port
  port:     process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:   'mongodb://user1:user1@ds153845.mlab.com:53845/heroku_wn6prhj7' || 'mongodb://localhost/shopnx'
  },

  seedDB: true
};
