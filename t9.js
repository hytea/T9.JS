const t9 = function (dictionary) {
  // Create a mapping of keypad digits to the letters they represent
  const digitMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  // Return an object with a getWords method that predicts words based on user input
  return {
    getWords: function (input) {
      // Remove any non-neumerical characters from the input as well as 1 and 0
      input = input.replace(/[^2-9]/g, '');

      // Return an empty array if the input is empty or not a string of digits
      if (!input) {
        return [];
      }

      // Convert the input string to an array of digits
      const digits = input.split('');

      // Generate a list of possible T9 keys for the input digits
      const t9Keys = digits.reduce((keys, digit) => {
        // If this is the first digit, return the letters that represent it
        if (keys.length === 0) {
          return digitMap[digit].split('');
        }

        // Otherwise, return a list of possible T9 keys
        const newKeys = [];
        keys.forEach((key) => {
          digitMap[digit].split('').forEach((letter) => {
            newKeys.push(key + letter);
          });
        });
        return newKeys;
      }, []);

      // Do a fuzzy search on the T9 dictionary to find words that match the possible T9 keys
      const words = fuzzySearch(t9Keys, dictionary);

      return words;
    },
  };
};

// Returns an array of target strings that match any part of the possible queries
function fuzzySearch(possibleQueries, targetStrings) {
  // Create a list of words that match the possible queries
  const words = [];
  possibleQueries.forEach((query) => {
    targetStrings.forEach((word) => {
      if (word.toLowerCase().includes(query.toLowerCase())) {
        words.push(word);
      }
    });
  });

  return words;
}

module.exports = t9;
