// Please do not change the name of this function
const needleInHaystack = (haystack, needle, needleLocation = [], path = []) => {
  for (let key in haystack) {
    const regex = new RegExp(`${needle}`, "i");
    if (typeof haystack[key] === "string" && regex.test(haystack[key])) {
      path.length > 0
        ? needleLocation.push(path.join(".") + `.${key}`)
        : needleLocation.push(key);
    } else if (typeof haystack[key] === "object") {
      needleInHaystack(haystack[key], needle, needleLocation, path.concat(key));
    }
  }

  return needleLocation.sort();
};

module.exports = { needleInHaystack };
