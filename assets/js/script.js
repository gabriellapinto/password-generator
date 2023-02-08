// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Prompts to get user input
var passLength = prompt("How long would you like your password?");
var lowercase = confirm("Would you like your password to include lowercase characters?");
var uppercase = confirm("Would you like your password to include uppercase characters?");
var numeric = confirm("Would you like your password to include numbers?");
var specialChar = confirm("Would you like your password to include special characters?");

// Characters for password

const alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const uniqueChar = ["!", """, "#", "$", "%", "&", ",'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Generate Password Function
function generatePassword() {

  





}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
