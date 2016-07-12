# ucum.js
JavaScript implementation of UCUM (http://unitsofmeasure.org)

## Units conversion

`ucum.convert`: Convert a value (represented as a Javascript Number) from one UCUM unit (represented as a case-sensitive UCUM string) to another, assuming they are conformant.

```
var one_inch = ucum.convert(2.54, 'cm', '[in_i]');
console.log(one_inch)

1
```

## Units parsing

`ucum.parse`: Parse a string into a ucum.js JSON representation (an object with `value` as a Number, and `units` as an Object where keys are acse-sensitive UCUM unit names and values are integers representing an exponent).


```
var parsed = ucum.parse('km/h');
console.log(parsed);

{ value: 1000, units: { m: 1, h: -1 } }
```

## Units canonicalization

`ucum.canonicalize`: Parse a string into a ucum.js JSON representation (an object with `value` as a Number, and `units` as an Object where keys are case-sensitive UCUM unit names and values are integers representing an exponent), and convert this to an expression where all `units` properties are reduced to the following base units: meter, second, gram, radian, kelvin, coulomb, candela.

```
var canonical = ucum.canonicalize('[in_i]/a');
console.log(canonical);

{ value: 8.048774304763354e-10, units: { m: 1, s: -1 } } 
```


### To use in browser

Save and include a `<script>` tag for [dist/ucum.js](dist/ucum.js)

### To use in Node.js

```
npm install ucum.js
```

### To build

```
$ git clone https://github.com/jmandel/ucum.js
$ cd ucum.js
$ npm install
$ make
```

