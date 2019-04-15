/* eslint-env mocha */
const StatsCollector = require('../backend/services/statsCollector.js');
const fixture = require('./fixtures/fixtures.js');
const fs = require('fs');
const assert = require('assert');

describe('StatsCollector', function() {
  console.log('StatsCollector, in tests', fixture)
  it('it should have tests', function(){
    let result = StatsCollector.pushValue(10000, data);
    console.log('result>', result)
    // true.should.equal(true);
  });
});