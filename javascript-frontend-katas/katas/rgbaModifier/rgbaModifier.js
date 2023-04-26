// Please do not change the name of this function
const rgbaModifier = (rgbaStr, percent, opacity) => {
  let numbers = rgbaStr.split("(");
  numbers = numbers[1].split(")");
  numbers = numbers[0].split(",");

  const newArray = numbers.map(number => {
    return parseInt(number);
  });

  const rSum = Math.ceil(newArray[0] + newArray[0] * (percent / 100));
  const gSum = Math.ceil(newArray[1] + newArray[1] * (percent / 100));
  const bSum = Math.ceil(newArray[2] + newArray[2] * (percent / 100));

  const r = rSum < 256 ? rSum : 255;
  const g = gSum < 256 ? gSum : 255;
  const b = bSum < 256 ? bSum : 255;

  return `rgba(${r},${g},${b},${opacity})`;
};

module.exports = { rgbaModifier };
