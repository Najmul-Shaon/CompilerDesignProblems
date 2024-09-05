const readline = require("readline");
// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Function to check if the input string matches the pattern a*b+
function matchesPattern(str) {
  // Regular expression to match the pattern a*b+
  const regex = /^a*b+$/;
  return regex.test(str);
}
// Prompt the user for input
rl.question("Enter a string: ", (input) => {
  if (matchesPattern(input)) {
    console.log(`${input} is accepted under rule 'a*b+'`);
  } else {
    console.log(`${input} is not recognized`);
  }
  // Close the readline interface
  rl.close();
});
