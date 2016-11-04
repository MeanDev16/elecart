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
    uri:   'mongodb://shopcart-30:oiY2UVk2fe6NotF8f_q7@shopcart-30.mongo.dbs.appsdeck.eu:30059/shopcart-30' || process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://user1:user1@ds143737.mlab.com:43737/heroku_6pmmkn6c' || 'mongodb://localhost/shopnx'
  },

  seedDB: true
};
