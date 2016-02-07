var express = require('express');
var router = express.Router();

var hostname = process.env.HOSTNAME

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mongo-host-test', {
    title: 'Mongo Host Test',
    session: req.session,
    hostname: hostname,
    error: req.query.error
  });
});

module.exports = router;