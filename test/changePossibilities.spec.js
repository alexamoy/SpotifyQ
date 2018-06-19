var expect = require('chai').expect;
var changePossibilities = require('../Question3');

describe('changePossibilities', function () {
  it ('returns an integer', function(){
    expect(Number.isInteger(changePossibilities(4, [1, 2, 3]))).to.eql(true);
  });

  it('finds all of the possibilities that the given integers can sum to equal the given amount', function () {
    expect(changePossibilities(4, [1, 2, 3])).to.eql(4);
  });

  it('test case 10, [2, 3, 4])', function () {
    expect(changePossibilities(10, [2, 3, 4])).to.eql(5);
  });

  it('test case 10, [1, 2, 3])', function () {
    expect(changePossibilities(10, [1, 2, 3])).to.eql(14);
  });

  it('test case 9, [1, 2, 3])', function () {
    expect(changePossibilities(9, [1, 2, 3])).to.eql(12);
  });

  it('test case 5, [1, 2, 5])', function () {
    expect(changePossibilities(5, [1, 2, 5])).to.eql(4);
  });

  it('test case 12, [1, 2, 5])', function () {
    expect(changePossibilities(12, [1, 2, 5])).to.eql(13);
  });

});
