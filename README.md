# ucum.js
JavaScript implementation of UCUM (http://unitsofmeasure.org)

## Units conversion

```
var one_inch = ucum.convert(2.54, 'cm', '[in_i]');
console.log(one_inch)

1
```

## Units parsing

```
var parsed = ucum.parse('km/h');
console.log(parsed);

{ value: 1000, units: { m: 1, h: -1 } }
```

## Units canonicalization

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

