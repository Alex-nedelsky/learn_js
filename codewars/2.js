function pigIt(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Define a regular expression to match non-letter characters
  const regex = /[^\w]/g;

  // Loop through each word and transform it into Pig Latin
  const pigLatinWords = words.map((word) => {
    // If the word contains only non-letter characters, return it as is
    if (word.match(regex)) {
      return word;
    }

    // Split the word into an array of characters
    const chars = word.split("");

    // Move the first character to the end of the array
    const firstChar = chars.shift();
    chars.push(firstChar);

    // Add "ay" to the end of the word
    chars.push("ay");

    // Join the array of characters back into a string
    return chars.join("");
  });

  // Join the array of Pig Latin words back into a string
  const pigLatinStr = pigLatinWords.join(" ");

  return pigLatinStr;
}