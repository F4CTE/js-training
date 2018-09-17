'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(p1){
	p1 = p1.toLowerCase();
	return p1;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper('hHibo'), 'hhibo');
// End of tests */
