// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Randomizes an integer from min - max
function randomInt(min, max) {
  // if the max is not defined then we assume we want a range from 0 - min
  if (!max) {
    max = min;
    min = 0;
  }

  var random = Math.random();
  return Math.floor(min*(1 - random) + random*max)
}

// Gets random item from a list
function getRandomItem(list) {
  return list[randomInt(list.length)];
}

// Generates the password with user input
function generatePassword() {

  var userInput = window.prompt("How many characters do you want your password?");

  var passwordLength = parseInt(userInput);

  // Checks to see if user input is a number
  if (isNaN(passwordLength)) {
    window.alert("Please insert a number!");
    return;
  }

  // Checks to see if password length is correct
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters.")
    return;
  }

  // Asks user what variables they want in their password
  var userNumbers = window.confirm("Would you like to include numbers in your password?");
  var userSymbols = window.confirm("Would you like to include symbols in your password?");
  var userLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var userUppercase = window.confirm("Would you like to include uppercase letters in your password?");
  
  
  // Lists that contain password criteria that we will use for the password later on
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "*"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = [];

  // Where all of the user's options go after they answer the prompts
  var userOptions = [];

  // Makes the lowercaseList to convert to uppercase
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }

  // If the user answers "true" to the confirm statements, then these will play out
  if (userNumbers === true) {
    userOptions.push(numberList);
  }

  if (userSymbols === true) {
    userOptions.push(symbolList);
  }

  if (userLowercase === true) {
    userOptions.push(lowercaseList);
  }

  if (userUppercase === true) {
    userOptions.push(uppercaseList);
  }

  // Manually adds lowercase letters to the password if all prompts were "false"
  if (userOptions.length === 0) {
    userOptions.push(lowercaseList);
  }

  // Empty string that will be filled with the password
  var generatedPassword = "";

  // Randomizes the options chosen by the user
  for (var i = 0; i < passwordLength; i++) {
    var randomList  = getRandomItem(userOptions);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar;
  }

  // Returns value and adds the password to the page
  return generatedPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);