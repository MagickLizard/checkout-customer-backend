/* eslint-env mocha */
const StatsCollector = require('../backend/services/statsCollector.js');
// const fixture = require('./fixtures/fixtures.js');
const fs = require('fs');
const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should;

describe('StatsCollector', function(){
  let statsCollector = new StatsCollector;
	describe('#pushValue', function(){
    it('It pushes request into stats collector', function(){
    let data = [5000, 10000, 5555, 2000, 2000, 3000, 200000];
    let actualResponse = statsCollector.pushValue(data);
     let expectedResponse = [ 5000, 10000, 5555, 2000, 2000, 3000 ];
    const statsCollectorRequest = statsCollector.requests;
    statsCollectorRequest.should.deep.equal(expectedResponse);
    });
    it('Timeout numbers should return a empty array', function(){
    let data = [200000];
    let actualResponse = statsCollector.pushValue(data);
     let expectedResponse = [ 5000, 10000, 5555, 2000, 2000, 3000 ];
    const statsCollectorRequest = statsCollector.requests;
    statsCollectorRequest.should.deep.equal([]);
    });
    it('Bad inputs should return empty array', function(){
    let data = {key: 5000000};
    let actualResponse = statsCollector.pushValue(data);
     let expectedResponse = [ 5000, 10000, 5555, 2000, 2000, 3000 ];
    const statsCollectorRequest = statsCollector.requests;
    statsCollectorRequest.should.deep.equal([]);
    });
  });
  	describe('#getMedian', function(){
    it('Return a median result for a array', function() {
    statsCollector.requests = [ 5000, 10000, 5555, 2000, 2000, 3000 ];
     const statsCollectorRequest = statsCollector.requests;
    let actualResponse = statsCollector.getMedian();
    actualResponse.should.deep.equal(4000);
    });
    it('Return a median result for a array and ignore timeouts', function() {
    statsCollector.requests = [ 5000, 10000, 5555, 2000, 2000, 3000, 5000000 ];
     const statsCollectorRequest = statsCollector.requests;
    let actualResponse = statsCollector.getMedian();
    actualResponse.should.deep.equal(4000);
    });
    it('Return empty array if bad data is set in array',function() {
    statsCollector.requests = [ 5000000 ];
     const statsCollectorRequest = statsCollector.requests;
    let actualResponse = statsCollector.getMedian();
    actualResponse.should.deep.equal([]);
    });
    it('Return empty array as bad data is set', function() {
    let data = {key: 5000000};
    let pushValueResponse = statsCollector.pushValue(data);
    statsCollector.requests = pushValueResponse;
    let actualResponse = statsCollector.getMedian();
    actualResponse.should.deep.equal([]);
    });
  });
    describe('#getMedian', function(){
    it('Return a median result for a array', function() {
    statsCollector.requests = [ 5000, 10000, 5555, 2000, 2000, 3000 ];
     const statsCollectorRequest = statsCollector.requests;
    let actualResponse = statsCollector.getMedian();
    actualResponse.should.deep.equal(4000);
    });
    it('Return a median result for a array and ignore timeouts', function() {
    statsCollector.requests = [ 5000, 10000, 5555, 2000, 2000, 3000, 5000000 ];
     const statsCollectorRequest = statsCollector.requests;
    let actualResponse = statsCollector.getMedian();
    actualResponse.should.deep.equal(4000);
    });
    it('Return empty array if bad data is set in array',function() {
    statsCollector.requests = [ 5000000 ];
     const statsCollectorRequest = statsCollector.requests;
    let actualResponse = statsCollector.getMedian();
    actualResponse.should.deep.equal([]);
    });
    it('Return empty array when bad data is set', function() {
    let data = {key: 5000000};
    let pushValueResponse = statsCollector.pushValue(data);
    statsCollector.requests = pushValueResponse;
    let actualResponse = statsCollector.getMedian();
    actualResponse.should.deep.equal([]);
    });
    it('Return empty array when bad data is set - string', function() {
    let data = "stingdd";
    let pushValueResponse = statsCollector.pushValue(data);
    statsCollector.requests = pushValueResponse;
    let actualResponse = statsCollector.getMedian();
    actualResponse.should.deep.equal([]);
    });
  });
  describe('#getAverage', function(){
  	it('Return a median result for a array', function() {
    statsCollector.requests = [ 5000, 10000, 5555, 2000, 2000, 3000 ];
    const statsCollectorRequest = statsCollector.requests;
    let actualResponse = statsCollector.getAverage();

    actualResponse.should.deep.equal(4592.5);
    });
    it('Return empty array when bad data is set - string', function() {
    let data = "stingdd";
    let pushValueResponse = statsCollector.pushValue(data);
    statsCollector.requests = pushValueResponse;
    let actualResponse = statsCollector.getAverage();
     actualResponse.should.deep.equal([]);
    });
   });
});