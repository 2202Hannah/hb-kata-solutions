// Please do not change the name of this function
function sentenceToCamelCase(sentence, boolean) {
  const sentenceArray = sentence.split(" ");

  if (boolean)
    return sentenceArray
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  else
    return sentenceArray
      .map(function(word, index) {
        if (index === 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");
}

function camelToEnglish(str) {
  const result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
}

module.exports = { sentenceToCamelCase, camelToEnglish };
