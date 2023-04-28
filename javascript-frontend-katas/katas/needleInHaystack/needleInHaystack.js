// Please do not change the name of this function
const needleInHaystack = (haystack, needle, needleLocation = [], path = []) => {
  for (let key in haystack) {
    if (typeof haystack[key] === "string" && haystack[key].includes(needle)) {
      needleLocation.push(path.join(".") + `.${key}`);
    } else if (typeof haystack[key] === "object") {
      needleInHaystack(haystack[key], needle, needleLocation, path.concat(key));
    }
  }

  return needleLocation;
};

module.exports = { needleInHaystack };
