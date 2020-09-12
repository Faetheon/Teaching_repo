// Helper functions
function generateRandomNumber() {
  return Math.ceil(Math.random() * 10);
}

function generateRandomNegativeNumber() {
  return Math.floor(Math.random() * -10);
}

// Exponent tests
  describe("Exponent", function() {
    it("should work", function () {
      const randomNumbers = [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()];
      const [a, b, c] = randomNumbers;
      exponent(a, c).should.equal(Math.pow(a, c));
      exponent(b, a).should.equal(Math.pow(b, a));
      exponent(c, b).should.equal(Math.pow(c, b));
    });
  
    it("should return the same number when given a power of 1", function () {
      const randomNumbers = [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()];
      const [a, b, c] = randomNumbers;
      exponent(a, 1).should.equal(a);
      exponent(b, 1).should.equal(b);
      exponent(c, 1).should.equal(c);
    });
  
    it("should return 1 when rasied to the zeroth power", function () {
      const randomNumbers = [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()];
      const [a, b, c] = randomNumbers;
      exponent(a, 0).should.equal(1);
      exponent(b, 0).should.equal(1);
      exponent(c, 0).should.equal(1);
    });
  
    // Advanced tests
    xit("should work with negative inputs", function () {
      const randomNumbers = [generateRandomNegativeNumber(), generateRandomNegativeNumber(), generateRandomNegativeNumber()];
      const [a, b, c] = randomNumbers;
      exponent(a, c).should.equal(Math.pow(a, c));
      exponent(b, a).should.equal(Math.pow(b, a));
      exponent(c, b).should.equal(Math.pow(c, b));
    });
  });
  
  // Palindrome tests
  describe("Palindrome", function() {
    it('should work', function() {
      isPalindrome('a').should.equal(true);
      isPalindrome('anna').should.equal(true);
      isPalindrome('anana').should.equal(true);
    });

    it('should work with a sentance', function() {
      isPalindrome('foo bar baz zab rab oof').should.equal(true);
    });
  });
