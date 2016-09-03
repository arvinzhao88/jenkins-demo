var app = require("../app.js")
var request = require('supertest')(app);

describe("Server Response", function() {
    it("returns status code 200", function(done) {
      request.get('/')
			.expect(200)
			.end(function (err,res) {
				if(err) return done(err);
				done();
			});
    });
});
