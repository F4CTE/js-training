'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(s) {
    let words = s.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
    }

    return words.join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('Juyf pofg mUfj'), 'Juyf Pofg Mufj')
// End of tests */
