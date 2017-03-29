var supertest = require('supertest');
var should = require('should');


// This agent refers to PORT where the program is running
var server = supertest.agent('http://localhost:3000');

// Unit test begins
describe('Testing get home page', function(done){
	it('Should return home page', function(){
		server
		.get('/')
		.expect('Content-Type',/text/)
		.expect(200)
		.end(function(err, res){
			res.status.should.equal(200);
			done();
		});
	});
});