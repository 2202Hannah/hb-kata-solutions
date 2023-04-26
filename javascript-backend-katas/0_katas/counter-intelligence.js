// Please do not change the name of this function
const counterIntelligence = str => {
  str = str.toUpperCase();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const shift = 22 - alphabet.indexOf(str[str.length - 1]) + 1;

  const resultStr = str
    .split('')
    .map(letter => {
      if (
        letter !== ' ' &&
        /[.,\/#!$%\^&\*;:{}=\-_`~()]/g.test(letter) !== true
      ) {
        let code = str.charCodeAt(str.split('').indexOf(letter)) + shift;
        while (code > 90) {
          code = code - 122 + 96;
        }
        return String.fromCharCode(code);
      } return letter;
    })
    .join('');

  return resultStr;
};

module.exports = { counterIntelligence };
