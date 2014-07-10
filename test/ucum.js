var assert = require('assert');
var ucum = require('../ucum');

describe('Ucum parser', function(){
  it('Should convert: centimerters to inches', function(){
    r = ucum.convert(2.54, 'cm', '[in_i]');
    console.log("Got", r);
    assert(r === 1);
  });
  it('Should parse units: kilometers per hour', function(){
    r = ucum.parse('km/h');
    r.should.eql({ value: 1000, units: { m: 1, h: -1 } });
  });
  it('Should canonicalize units: inches per year', function(){
    r = ucum.canonicalize('[in_i]/a');
    r.should.eql({ value: 8.048774304763354e-10, units: { m: 1, s: -1 } } );
  });
});

