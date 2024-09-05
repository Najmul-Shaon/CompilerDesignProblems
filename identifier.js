const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// List of JavaScript reserved keywords
const reservedKeywords = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "let",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];
function isValidIdentifier(identifier) {
  // Check if the first character is a letter or an underscore
  if (!/^[a-zA-Z_]/.test(identifier)) {
    return false;
  }
  // Check if the identifier contains only letters, digits, or underscores
  if (!/^[a-zA-Z0-9_]+$/.test(identifier)) {
    return false;
  }
  // Check if the identifier is a reserved keyword
  if (reservedKeywords.includes(identifier)) {
    return false;
  }
  return true;
}
rl.question("Enter an identifier: ", (input) => {
  if (isValidIdentifier(input)) {
    console.log("Valid identifier");
  } else {
    console.log("Not a valid identifier");
  }
  rl.close();
});
