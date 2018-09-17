'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(txt){
	txt = txt.slice(0,2);
	return txt;
}
function keepLast(txt){
	txt = txt.slice(-2);
	return txt;
}
function keepFirstLast(txt){
	txt = txt.slice(3,5);
	return txt;
}
//* Begin of tests
const assert = require('assert')
assert.strictEqual(keepFirst('tatouti'), 'ta')
assert.strictEqual(keepLast('tatouti'), 'ti')
assert.strictEqual(keepFirstLast('tatouti'), 'ou')

// End of tests */
