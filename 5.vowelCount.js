/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let vowelsCount = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const strArr = str.split('');

  strArr.forEach((el) => {
    for (let i = 0; i < vowels.length - 1; i++) {
      if (el === vowels[i]) {
        vowelsCount++;
      }
    }
  });

  return vowelsCount;
}

console.log(getCount('This is just a test'));

// Second Solution
const getCount = (str) => (str.match(/[aeiou]/g) || []).length;
