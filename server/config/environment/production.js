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
    uri:   'mongodb://elecart-6653:1d_gH_PX6SS6PqvVwwaA@elecart-6653.mongo.dbs.appsdeck.eu:30444/elecart-6653' || 'mongodb://<dbuser>:<dbpassword>@ds153845.mlab.com:53845/heroku_wn6prhj7' || 'mongodb://localhost/shopnx'
  },

  seedDB: true
};
