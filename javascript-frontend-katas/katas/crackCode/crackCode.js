// Please do not change the name of this function
const crackCode = encryptedKey => {
  const letters = encryptedKey.slice(0, encryptedKey.indexOf("("));
  const bracket = encryptedKey.slice(
    encryptedKey.indexOf("(") + 1,
    encryptedKey.length - 1
  );
  const code = [];

  letters
    .split("-")
    .sort((a, b) => b.length - a.length || a.localeCompare(b))
    .forEach(element => {
      if (/^([^0-9]*)$/.test(element) && code.length < 4) {
        code.push(element[0]);
      }
    });

  return code.sort().join("") === bracket;
};

module.exports = { crackCode };
