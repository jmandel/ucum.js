all:  ucum-parser.js

prefixes.json: lib/codegen.js
	node lib/codegen.js  --prefixes > generated/prefixes.json

equivalents.json: lib/codegen.js
	node lib/codegen.js  --prefixes > generated/equivalents.json

ucum-parser.peg: lib/codegen.js
	node lib/codegen.js  --peg  > generated/ucum-parser.peg

ucum-parser.js: ucum-parser.peg equivalents.json prefixes.json
	./node_modules/pegjs/bin/pegjs  -o size generated/ucum-parser.peg   generated/ucum-parser.js
