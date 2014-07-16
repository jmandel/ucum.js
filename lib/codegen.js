var args = require('optimist').argv,
fs = require('fs'),
helpers = require('./helpers'),
xml2js = require('xml2js');

var parser = new xml2js.Parser();
var essence = fs.readFileSync(__dirname+'/../vendor/ucum-essence.xml').toString();
var tests = fs.readFileSync(__dirname+'/../vendor/ucum-functional-tests.xml').toString();

var prefixes;

parser.parseString(tests, function (err, result) {
  if (args.tests) {
    console.log(JSON.stringify(extractTests(result), null, 2));
  }
});

parser.parseString(essence, function (err, result) {
  prefixes = extractPrefixes(result);

  if (args.equivalents) {
    console.log(JSON.stringify(extractEquivalents(result), null, 2));
  }

  if (args.prefixes) {
    console.log(JSON.stringify(prefixes, null, 2));
  }

  if (args.metrics) {
    var metrics = extractMetric(result, true).concat(extractBase(result));
    var dict = {};
    metrics.forEach(function(m){
      dict[m] = true;
    });
    console.log(JSON.stringify(dict));
  }


  if (args.peg) {
    ATOM = extractMetric(result, false);
    METRICATOM = extractMetric(result, true).concat(extractBase(result));
    METRICATOM = expand(METRICATOM, ATOM);
    METRICATOM = pegOpts(METRICATOM, true);

    var pegfile = fs.readFileSync(__dirname+'/ucum-parser.peg.template').toString();
    pegfile = pegfile.replace("{{METRICATOM}}", METRICATOM);

    PREFIX = pegOpts(Object.keys(prefixes), false);
    pegfile = pegfile.replace("{{PREFIX}}", PREFIX);
    console.log(pegfile);
  }

});

function expand(metrics, nonmetrics){
  var ret = [];

  function addM(m){
     ret.push([m, 'u:"'+m+'" {return {value: 1, units: {"'+m+'": 1}};}']);
  }

  metrics.forEach(addM);
  nonmetrics.forEach(addM);

  ret = ret.sort(function(a,b){
    if (a[0].length > b[0].length){
      return -1;
    }
    if (a[0].length < b[0].length){
      return 1;
    }
    return 0;
  });

  return ret.map(function(v){return v[1];});
}

function pegOpts(l, alreadyQuoted){
  var q = (alreadyQuoted ? '': '"');
  return q + l.join(q+' \n/ '+q)+ q;
}

function extractPrefixes(result) {
  var ret = {};
  result.root.prefix.forEach(function(p){
    ret[p.$.Code] =parseFloat(p.value[0].$.value);
  });
  return ret;
}

function code(u){
  return u.$.Code;
}

function extractMetric(result, bool){
 return result.root.unit.filter(function(m){
   return m.$.isMetric === (bool ? 'yes' : 'no');
 }).map(code);
}

function extractBase(result){
 return result.root['base-unit'].map(code);
}

function equivalent(u){
 return [code(u), {value: parseFloat(u.value[0].$.value), ucum: u.value[0].$.Unit}];
}


function extractEquivalents(result){
 var ret = {};
 result.root.unit
  .map(equivalent)
  .forEach(function(e){ret[e[0]] = e[1];});
 return ret;
}


function extractTests(result){
  var ret = {};
  ret.validation = result.ucumTests.validation[0]['case'].map(function(c){
    return c.$;
  });
  ret.conversion = result.ucumTests.conversion[0]['case'].map(function(c){
    return c.$;
  });
  return ret;
};

