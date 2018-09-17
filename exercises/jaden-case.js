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
function jadenCase(str)
{
 return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
}


//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
