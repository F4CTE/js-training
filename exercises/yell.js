'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
function yell(txt){
	return txt.toUpperCase;
}

//* Begin of tests
const assert = require('assert')

//assert.fail('You must write your own tests')
assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
// End of tests */
