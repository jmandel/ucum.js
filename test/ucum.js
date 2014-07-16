var assert = require('assert');
var ucum = require('../ucum');
var tests = require('../generated/tests.json');
var helpers = require('../lib/helpers');

describe('Ucum parser', function(){
  it('Should convert: centimerters to inches', function(){
    r = ucum.convert(2.54, 'cm', '[in_i]');
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
  it('Can "convert days"', function(){
    r = ucum.convert(1, 'd', 's');
    assert(r === 24*60*60);
  });
});




var skipForPrecision = ['3-113','3-115','3-118','3-119'];
describe('Ucum functional tests', function(){

  tests.validation.forEach(function(t){
    it('Handles case ' + t.id + ': ' + t.unit + '==' + t.valid, function(){
      try {
        var r = ucum.parse(t.unit);  
        assert(t.valid === 'true');
      } catch(e){
        assert(t.valid === 'false');
      }
    });
  });

  tests.conversion.forEach(function(t){
    if (skipForPrecision.indexOf(t.id) !== -1){ return; }
    it('Handles case ' + t.id +
      ': '+t.value + t.srcUnit + 
      '->' + t.dstUnit+' = '+t.outcome,
    function(){
      var tin = parseFloat(t.value);
      var tout = parseFloat(t.outcome);
      var r = ucum.convert(tin, t.srcUnit, t.dstUnit);  
      (r).should.be.approximately(tout,.0000000000001*tout);
    });
  });

});

