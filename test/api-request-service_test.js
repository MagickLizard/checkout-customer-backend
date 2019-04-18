
/* eslint-env mocha */
const getRecentConversationSummaries = require('../backend/services/api-request-service.js');
const fixture = require('./fixtures/fixtures.js');
const fs = require('fs');
const assert = require('assert');
const expect = require('chai').expect;
// Configure Mocha, telling both it and chai to use BDD-style tests.

// mocha.setup("bdd");
// chai.should();

describe('getRecentConversationSummaries()', () => {
  it('should return the current user\'s latest conversations sorted by latest message\'s timestamp', async () => {
    const result = await getRecentConversationSummaries(); //CHANGE BEFORE COMMIT
    result.should.deep.equal([
      {
        id: "1",
        latest_message: {
          id: "1",
          body: "",
          from_user: {
            id: "1",
            avatar_url: "http://instagram.com/g/300/300",
          },
          created_at: "2",
        },
      }
    ]);
    done();
  });
  // TODO: Add more tests
});

// Run all our test suites.  Only necessary in the browser.
// mocha.run();
