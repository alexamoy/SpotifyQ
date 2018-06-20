var expect = require('chai').expect;
var sortByStrings = require('../Question1');

describe('sortByStrings', function () {
  it ('returns a string', function(){
    let output = sortByStrings('good', 'odg');
    expect(typeof output).to.eql('string');
  });

  it('given a string s, sort that string by the order they occur in string t ', function () {
    expect(sortByStrings('good', 'odg')).to.eql('oodg');
  });

  it('given a string s, sort that string by the order they occur in string t ', function () {
    expect(sortByStrings('weather', 'therapyw')).to.eql('theeraw');
  });

  it('given a string s, sort that string by the order they occur in string t ', function () {
    expect(sortByStrings('goodbye', 'gobew')).to.eql('goobe');
  });

});
