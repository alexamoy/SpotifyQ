var expect = require('chai').expect;
var decodeString = require('../Question2');

describe('decodeString', function () {
  it ('returns a string', function(){
    let output = decodeString('4[ab]');
    expect(typeof output).to.eql('string');
  });

  it('given an encoded string, returns its corresponding decoded string ', function () {
    expect(decodeString('4[ab]')).to.eql('abababab');
  });

  it('given an encoded string, returns its corresponding decoded string', function () {
    expect(decodeString('2[b3[a]]')).to.eql('baaabaaa');
  });

});
