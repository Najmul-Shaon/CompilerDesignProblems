// commentCheck.js
function isComment(line) {
  line = line.trim();
  // Check for single-line comments
  if (line.startsWith("//")) {
    return true;
  }
  // Check for block comments
  else if (line.startsWith("/*") && line.endsWith("*/")) {
    return true;
  }
  return false;
}
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Enter comment: ", (line) => {
  if (isComment(line)) {
    console.log("It is a comment");
  } else {
    console.log("It is not a comment");
  }
  readline.close();
});
