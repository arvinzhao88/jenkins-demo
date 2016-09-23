'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JenkinsDemoSchema = new Schema({
	name: String,
  count: Number
});

var JenkinsDemo = mongoose.model('JenkinsDemo', JenkinsDemoSchema);
var Promise = require('bluebird');
Promise.promisifyAll(JenkinsDemo);
Promise.promisifyAll(JenkinsDemo.prototype);

module.exports = JenkinsDemo;
