const chai = require('chai');
const { main } = require('./main');
const expect = chai.expect;

describe('main function', () => {
  it('should return a greeting with the provided name', () => {
    const params = { name: 'John' };
    const result = main(params);

    const expected = {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: '<html><body><h3>Hello, John!</h3></body></html>'
    };

    expect(result).to.deep.equal(expected);
  });

  it('should return a default greeting if name is not provided', () => {
    const params = {};
    const result = main(params);

    const expected = {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: '<html><body><h3>Hello, Functions on CodeEngine!</h3></body></html>'
    };

    expect(result).to.deep.equal(expected);
  });
});
