var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var JenkinsDemo = mongoose.model('JenkinsDemo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  JenkinsDemo.findOneAsync().then(function(data){
    res.render('users', { title: data.name, count: data.count});
  })
});

module.exports = router;
