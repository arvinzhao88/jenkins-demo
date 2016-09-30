var Redis = require('ioredis');
var REDIST_ADDR = process.env.REDIS_PORT_6379_TCP_ADDR || 'localhost';
var REDIST_PORT = process.env.REDIS_PORT_6379_TCP_PORT || 6379;

var client = new Redis({
  db: 0,
  host: REDIST_ADDR,
  port: REDIST_PORT,
  password: process.env.REDIS_PASSWORD || ''
})

client.on("error", function (err) {
  console.error('redis error')
})

exports = module.exports = client