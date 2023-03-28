function incrementString(strng) {
  const numStr = strng.match(/\d+$/);
  if (numStr === null) {
    return strng + "1";
  }
  const str = strng.slice(0, -numStr[0].length);
  const num = parseInt(numStr[0], 10) + 1;
  const numLen = numStr[0].length;
  return str + num.toString().padStart(numLen, "0");
}