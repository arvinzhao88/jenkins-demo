'use strict';

var path = require('path');

module.exports = function(app) {
  
  app.use('/users', require('./routes/users'));

  app.use('/*', require('./routes/index'));
};