var mongoose = require('mongoose')

var dboptions = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  replset: { rs_name: process.env.DB_REPLICA_SET }
  // user: 'myUserName',
  // pass: 'myPassword'
}

mongoose.connect('mongodb://' + process.env.DB_HOST + '/banana-test', dboptions)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Mongoose Connected")
});

exports.mongoose = mongoose