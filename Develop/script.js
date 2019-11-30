
//ARRAYS needed for the Random Password Generator

//All lowercase letters
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//All capital letters
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//All numeric characters
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//All special characters
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "`", "{", "|", "}", "~", "_", "[", "]", "^"];


// STAGE 1—— Initial prompts

// Lowercase letter confirm
var lowercaseConfirm = confirm("Would you like your password to contain lowercase letters? \nPlease select 'ok' for yes, and 'cancel' for no."); {
  console.log(lowercaseConfirm);
}
// Capital letter confirm
var capitalConfirm = confirm("Would you like your password to contain capital letters? \nPlease select 'ok' for yes, and 'cancel' for no."); {
  console.log(capitalConfirm);
}
// Numeric character confirm
var numeralConfirm = confirm("Would you like your password to contain numeric characters? \nPlease select 'ok' for yes, and 'cancel' for no."); {
  console.log(numeralConfirm);
}
// Special character confirm
var specialConfirm = confirm("Would you like your password to contain special characters? \nPlease select 'ok' for yes, and 'cancel' for no."); {
  console.log(capitalConfirm);
}















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
