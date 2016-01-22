var wordPuzzle = function(letter) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i += 1) {
    if (letter === vowels[i]) {
      return true;
    }

  }

};
