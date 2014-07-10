var args = require('optimist').argv,
fs = require('fs'),
helpers = require('./helpers'),
xml2js = require('xml2js');

var parser = new xml2js.Parser();
var essence = fs.readFileSync(__dirname+'/../vendor/ucum-essence.xml').toString();

parser.parseString(essence, function (err, result) {

  if (args.equivalents) {
    console.log(JSON.stringify(extractEquivalents(result), null, 2));
  }

  if (args.prefixes) {
    console.log(JSON.stringify(extractPrefixes(result), null, 2));
  }

  if (args.peg) {
    ATOM = pegOpts(extractMetric(result, false));
    METRICATOM = pegOpts(extractMetric(result, true).concat(extractBase(result)));
    PREFIX = pegOpts(Object.keys(extractPrefixes(result)));

    var pegfile = fs.readFileSync(__dirname+'/ucum-parser.peg.template').toString();
    pegfile = pegfile.replace("{{ATOM}}", ATOM);
    pegfile = pegfile.replace("{{METRICATOM}}", METRICATOM);
    pegfile = pegfile.replace("{{PREFIX}}", PREFIX);
    console.log(pegfile);
  }
});

function pegOpts(l){
  return '"' + l.join('" \n/ "')+ '"';
}

function extractPrefixes(result) {
  var ret = {};
  result.root.prefix.forEach(function(p){
    ret[p.$.Code] =helpers.enotation(p.value[0].$.value);
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
 return [code(u), {value: helpers.enotation(u.value[0].$.value), ucum: u.value[0].$.Unit}];
}


function extractEquivalents(result){
 var ret = {};
 result.root.unit
  .map(equivalent)
  .forEach(function(e){ret[e[0]] = e[1];});
 return ret;
}
