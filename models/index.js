const dbConfig = require('../db/connect.js');

const mongodb = require('mongodb');
mongodb.Promise = global.Promise;

const db = {};
db.mongodb = mongodb;
db.url = dbConfig.url;
db.theme = require('./product.js')(mongodb);
db.user = require('./user.js')(mongodb);

module.exports = db;