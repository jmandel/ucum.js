ucum = require('../ucum');
r = ucum.canonicalize('/5.[in_i]');
console.log(r);

r = ucum.convert(12*2.54, 'cm', '[ft_i]');
console.log(r);
