const palindromes = function(string) {
  const punctuation = /[^a-z0-9]/g;
  const cleanedString = string.toLowerCase().replace(punctuation, "");
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
