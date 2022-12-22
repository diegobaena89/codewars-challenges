/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  //Code here
  str = str.trim().split(/\s{1,}/);

  return str
    .map((val) => {
      if (/^[A-Za-z]+$/.test(val)) {
        return `${val.slice(1)}${val.slice(0, 1)}ay`;
      }

      return val;
    })
    .join(' ');
}

console.log(pigIt('Pig latin is cool'));
