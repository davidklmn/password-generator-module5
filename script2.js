// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// -----------------------------------------------------------------

// To start we have to get some variables to store prompt/confirm values
var passwordLength = 0;
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;
var finalPass = "";

// Function to prompt user for password options
function getPasswordOptions() {
  pass = "";
  //Asking the user of the lentgh of password between 10 - 64
  passwordLength = prompt(
    "How long password would you like to generate? (10 - 64)"
  );
  //Asking the user about the password characters
  lowercase = confirm("Do you want lowercase characters in your password?");
  uppercase = confirm("Do you want uppercase characters in your password?");
  numeric = confirm("Do you want numeric characters in your password?");
  special = confirm("Do you want special characters in your password?");
  //Checking if the length is between 10-64
  if (passwordLength < 10) {
    alert("Password mut be longer than 9 characters");
    getPasswordOptions();
  } else if (passwordLength > 64) {
    alert("Password mut be shorter than 65 characters");
    getPasswordOptions();
  }
}

// Random character pickers
function randomLower() {
  return lowerCasedCharacters[
    Math.floor(Math.random() * lowerCasedCharacters.length)
  ];
}
function randomUpper() {
  return upperCasedCharacters[
    Math.floor(Math.random() * upperCasedCharacters.length)
  ];
}
function randomNumeric() {
  return numericCharacters[
    Math.floor(Math.random() * numericCharacters.length)
  ];
}
function randomSpecial() {
  return specialCharacters[
    Math.floor(Math.random() * specialCharacters.length)
  ];
}

// Function for getting a random element from an array
function getRandom() {
  var pass = "";
  for (let i = 0; i < passwordLength; i++) {
    if (lowercase) {
      pass += randomLower();
    }
    if (uppercase) {
      pass += randomUpper();
    }
    if (numeric) {
      pass += randomNumeric();
    }
    if (special) {
      pass += randomSpecial();
    }
  }
  finalPass = pass.slice(0, passwordLength);
  // Checking if the user selected at least one character type
  if (finalPass.length === 0) {
    alert("You need to choose at least one character type!");
    generatePassword();
  }
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getRandom();
  return finalPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
