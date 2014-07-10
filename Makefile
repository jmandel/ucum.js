all:  ucum-parser.js browserified

prefixes.json: lib/codegen.js
	node lib/codegen.js  --prefixes > generated/prefixes.json

equivalents.json: lib/codegen.js
	node lib/codegen.js  --equivalents > generated/equivalents.json

ucum-parser.peg: lib/codegen.js
	node lib/codegen.js  --peg  > generated/ucum-parser.peg

ucum-parser.js: ucum-parser.peg equivalents.json prefixes.json
	./node_modules/pegjs/bin/pegjs  -o size generated/ucum-parser.peg   generated/ucum-parser.js

browserified: ucum-parser.js
	./node_modules/.bin/browserify  lib/entry.js > dist/ucum.js
