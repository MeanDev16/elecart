'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
<<<<<<< HEAD
  ip:       process.env.IP ||
            undefined,

  // Server port
  port:     process.env.PORT ||
=======
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
>>>>>>> 3b7d3557f4d0e8b542763917d688b293c793344c
            8080,

  // MongoDB connection options
  mongo: {
<<<<<<< HEAD
    uri:  'mongodb://elecart-5307:rlYkKlJRiGcEuRHGNOCh@elecart-5307.mongo.dbs.appsdeck.eu:30155/elecart-5307'  || 'mongodb://user1:user1@ds153845.mlab.com:53845/heroku_wn6prhj7' || 'mongodb://localhost/shopnx'
=======
    uri:   'mongodb://shopcart-30:oiY2UVk2fe6NotF8f_q7@shopcart-30.mongo.dbs.appsdeck.eu:30059/shopcart-30' || process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://user1:user1@ds143737.mlab.com:43737/heroku_6pmmkn6c' || 'mongodb://localhost/shopnx'
>>>>>>> 3b7d3557f4d0e8b542763917d688b293c793344c
  },

  seedDB: true
};
