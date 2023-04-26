// Please do not change the name of this function
function tillAddition(cash) {
  let total = 0;

  for (const key in cash) {
    if (cash.hasOwnProperty(key)) {
      switch (key) {
        case "1p":
          total += 0.01 * cash["1p"];
          break;
        case "2p":
          total += 0.02 * cash["2p"];
          break;
        case "5p":
          total += 0.05 * cash["5p"];
          break;
        case "10p":
          total += 0.1 * cash["10p"];
          break;
        case "20p":
          total += 0.2 * cash["20p"];
          break;
        case "50p":
          total += 0.5 * cash["50p"];
          break;
        case "£1":
          total += 1 * cash["£1"];
          break;
        case "£2":
          total += 2 * cash["£2"];
          break;
        case "£5":
          total += 5 * cash["£5"];
          break;
        case "£10":
          total += 10 * cash["£10"];
          break;
        case "£20":
          total += 20 * cash["£20"];
          break;
        case "£50":
          total += 50 * cash["£50"];
          break;
      }
    }
  }

  return "£" + total.toFixed(2);

  //  if (Object.hasOwn(cash, "1p")) {
  //    total += 0.01;

  //   : Object.hasOwn(cash, "2p") ? total += 0.02
  //   : Object.hasOwn(cash, "5p") ? total += 0.05
  //   : Object.hasOwn(cash, "10p") ? total += 0.10
  //   : Object.hasOwn(cash, "20p") ? total += 0.20
  //   : Object.hasOwn(cash, "50p") ? total += 0.50
  //   : Object.hasOwn(cash, "£1") ? total += 1
  //   : Object.hasOwn(cash, "£2") ? total += 2
  //   : Object.hasOwn(cash, "£5") ? total += 5
  //   : Object.hasOwn(cash, "£10") ? total += 10
  //   : Object.hasOwn(cash, "£20") ? total += 20
  //   : total += 50;
}

module.exports = tillAddition;
