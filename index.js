/*function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
/*if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;*/

function isPalindrome(word)
 {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// Define the isPalindrome function
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
      if (str[start] !== str[end]) {
          return false;
      }
      start++;
      end--;
  }

  return true;
}

// Export the function for testing
module.exports = isPalindrome;

const isPalindrome = require('../index');

// Test cases
test('returns true for "abba"', () => {
    expect(isPalindrome('abba')).toBe(true);
});

test('returns true for "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
});

test('returns true for "a"', () => {
    expect(isPalindrome('a')).toBe(true);
});

test('returns false for "robot"', () => {
    expect(isPalindrome('robot')).toBe(false);
});

test('returns false for "ab"', () => {
    expect(isPalindrome('ab')).toBe(false);
});

