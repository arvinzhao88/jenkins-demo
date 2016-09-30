var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var JenkinsDemo = mongoose.model('JenkinsDemo');
var redis = require('../db/redis');

/* GET home page. */
router.get('/', function(req, res, next) {
  JenkinsDemo.findOneAsync().then(function(data){
    redis.get('foo').then(function (result) {
      res.render('index', { title: data.name, count: data.count, foo:result});
    });
  })
});

module.exports = router;
