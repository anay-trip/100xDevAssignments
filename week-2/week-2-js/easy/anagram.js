/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  // Iterate through each character in str1 and store it in a map with the count of each character
  let map1 = new Map();
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i].toLowerCase();
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  }
  // Iterate through each character in str2 and check if it exists in the map deduct the count by 1 if it doesn't exist in the map return false.
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i].toLowerCase();
    if (map1.has(char)) {
      map1.set(char, map1.get(char) - 1);
    } else {
      return false;
    }
  }
  // For each key in the map check if the value is 0 if not return false
  for (let [key, value] of map1.entries()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;

}

console.log(isAnagram("hello", "olleh"));
console.log(isAnagram("hello", "hello"));
console.log(isAnagram("hello", "elloh"));
console.log(isAnagram("hello", "lohel"));
console.log(isAnagram("hello", "car"));
console.log(isAnagram("hello", "lohelp"));
console.log(isAnagram("lhello", "elloh"));
console.log(isAnagram("hello", "elloH"));

module.exports = isAnagram;
