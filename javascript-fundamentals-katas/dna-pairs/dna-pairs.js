// Please do not change the name of this function
function dnaPairs(dna) {
  dnaArray = dna.split("");

  return dnaArray.map(letter =>
    letter === "A"
      ? ["A", "T"]
      : letter === "G"
      ? ["G", "C"]
      : letter === "C"
      ? ["C", "G"]
      : letter === "T"
      ? ["T", "A"]
      : []
  );
}

module.exports = dnaPairs;
