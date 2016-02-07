var mongoose = require('mongoose')
mongoose.connect('mongodb://' + process.env.DB_HOST + '/banana-test')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Mongoose Connected")
});

exports.mongoose = mongoose