/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Iterate through each character with 2 pointers one from the start and one from the end
  // If the character at the start is not equal to the character at the end return false
  // If the character at the start is equal to the character at the end increment start counter and decrement end counter

  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (!isLetter(str[start])) {
      start++;
      continue;
    }
    if (!isLetter(str[end])) {
      end--;
      continue;
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

//check if the string is a letter
function isLetter(str) {
  return str.length === 1 && str.match(/[a-zA-Z]/i);
}
module.exports = isPalindrome;
