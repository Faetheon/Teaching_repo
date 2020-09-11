// Exponent tests
console.assert(exponent(2, 1) === 2, "When rasied to the first power it should equal itself");
console.assert(exponent(2, 0) === 1, "When rasied to the zeroth power it should equal 1");
console.assert(exponent(6, 0) === 1, "When rasied to the zeroth power it should equal 1");
console.assert(exponent(3, 0) === 1, "When rasied to the zeroth power it should equal 1");
console.assert(exponent(2, 3) === 8, "Should work normally with regular inputs");
console.assert(exponent(2, -2) === 0.25, "When rasied to a negative power it should respond appropriately");

// Palindrome tests
console.assert(isPalindrome('a'), "Works with a single letter");
console.assert(isPalindrome('anna'), "Works with even amount of letters");
console.assert(isPalindrome('anana'), "Works with an odd amount of letters");
console.assert(isPalindrome('banana'), "Works with a non palindrome");
console.assert(isPalindrome('foo bar baz zab rab oof'), "Works with spaces");
