// Please do not change the name of this function
function herdTheBabies(str) {
  const arr = [];

  str.split("").forEach(letter => {
    if (letter.toUpperCase() === letter) {
      arr.push(letter);
    } else arr.push(letter.toUpperCase() + ` lower`);
  });

  const sortedArr = arr.sort().map(letter => {
    if (letter.length > 1) {
      return letter.split(" ")[0].toLowerCase();
    } else return letter;
  });

  return sortedArr.join("");
}

module.exports = herdTheBabies;
