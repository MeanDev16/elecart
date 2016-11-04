'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://user1:user1@ds153845.mlab.com:53845/heroku_wn6prhj7' || 'mongodb://localhost/shopnx'
  },

  seedDB: true
};
