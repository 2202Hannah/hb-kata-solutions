// Please do not change the name of this function
const parseHexInt = str => {
  const base16Obj = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };

  const arr = str.split("").reverse();
  let num = 0;

  arr.forEach((element, index) => {
    num += Math.pow(16, index) * base16Obj[element.toLowerCase()];
  });

  return num;
};

module.exports = { parseHexInt };
