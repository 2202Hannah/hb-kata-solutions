const fs = require("fs/promises");

// Please do not change the name of this function
async function romanNumeralEncoder(num) {
  let romanNum = "";
  try {
    const data = await fs.readFile(
      "./katas/romanNumeralEncoder/romanNumeral.txt",
      { encoding: "utf8" }
    );

    const dataString = data.replace(/\s+/g, ",");
    const dataArray = dataString.split(",");

    dataArray.forEach((element, index) => {
      const numAsString = num.toString();

      if (element === numAsString) {
        return (romanNum += dataArray[index + 1]);
      }
    });
    return romanNum;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { romanNumeralEncoder };
