'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://elecart-6653:1d_gH_PX6SS6PqvVwwaA@elecart-6653.mongo.dbs.appsdeck.eu:30444/elecart-6653' || process.env.MONGOLAB_URI || 'mongodb://localhost/angularfullstack-test'
  }
};