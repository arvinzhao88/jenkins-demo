var mongoose = require('mongoose');
var JenkinsDemo = mongoose.model('JenkinsDemo');

// JenkinsDemo.countAsync().then(function (count) {
//   if(count === 0){
//     JenkinsDemo.createAsync({
//       name:'jenkins-demo',
//       count: 1
//     })
//   }
// })