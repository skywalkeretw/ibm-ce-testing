const chai = require('chai');
const { main } = require('./main');
const expect = chai.expect;

describe('main function', () => {

  it('should return a default greeting if name is not provided', () => {
    const params = {};
    const result = main(params);

    const expected = {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: {"joke": getRandomJoke, "test": true}
   }

    expect(result.body.test).to.deep.equal(true);
  });
});
