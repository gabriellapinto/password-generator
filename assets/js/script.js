// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate Password Function
function generatePassword() {
  var passLength = window.prompt("How long would you like your password?");

  // This if statement confirms the password length and makes sure it is within the correct range
  if (passLength < 8 || passLength > 128) {
    window.alert("Your password MUST be between 8 and 128 characters.")
    return;
  }

  // Prompts to get user input for their password
  var lowercase = window.confirm("Would you like your password to include lowercase characters?");
  var uppercase = window.confirm("Would you like your password to include uppercase characters?");
  var numeric = window.confirm("Would you like your password to include numbers?");
  var specialChar = window.confirm("Would you like your password to include special characters?");

  // Characters for password
  const lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const specialList = ["!", "@", "#", "$", "%", "^", "*"];

  // Empty Array to add user's password choices to
  var passwordContainer = [];

  // These if statements push content into empty array ONLY if the user confirmed they wanted them
  if (lowercase === true) {
    passwordContainer.push(lowercaseList);
  }

  if (uppercase === true) {
    passwordContainer.push(uppercaseList);
  }

  if (numeric === true) {
    passwordContainer.push(numbersList);
  }

  if (specialChar === true) {
    passwordContainer.push(specialList);
  }

  // This if statement confirms that if the user did not confirm to any prompts, it will automatically input lowercase for the password
  if (passLength.length === 0) {
    passwordContainer.push(lowercaseList);
  }

  // Empty array for password to be added to
  var generatedPassword = "";

  // This for loop randomizes the password by grabbing random indexes from the arrays and adding them to
  for (i = 0; i < passLength; i++) {
    var containerIndex = Math.floor(Math.random()* passwordContainer.length);
    var randomArray = passwordContainer[containerIndex];
    var randomIndex = Math.floor(Math.random()* randomArray.length);
    var randomCharacter = randomArray[randomIndex];
    generatedPassword += randomCharacter;
  }

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
