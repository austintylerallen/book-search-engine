const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user-123:Papa7758$@ac-gbxv2gu-shard-00-00.w6x6iki.mongodb.net:27017,ac-gbxv2gu-shard-00-01.w6x6iki.mongodb.net:27017,ac-gbxv2gu-shard-00-02.w6x6iki.mongodb.net:27017/myDatabaseName?ssl=true&replicaSet=atlas-k5ulnb-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;
