
//ARRAYS needed for the Random Password Generator

  //All lowercase letters
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //All capital letters
  var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //All numeric characters
  var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  //All special characters
  var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "`", "{", "|", "}", "~", "_", "[", "]", "^"];

  // Empty arrays
  var completeArray = [];
  var finalArray = [];
  
  // Final Password
  var userPassword = "";

// STAGE 1—— Initial prompts

  // This do loop ensures that at least one type of character is chosen.
  do {
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
      console.log(specialConfirm);
    }

    // Error message that occurs when user fails to select any characters.
      if ((lowercaseConfirm === false) && (capitalConfirm === false) && (numeralConfirm === false) && (specialConfirm === false)) {
        alert("Passwords must include at least one type of character. \nPlease review the options again, and select the types of characters you would like to include.");
      }
      
  } while ((lowercaseConfirm === false) && (capitalConfirm === false) && (numeralConfirm === false) && (specialConfirm === false));

  // This do loop ensures that a valid password length is chosen.
  do {
    // Ask the user how many characters they would like in the password.
    var userPasswordLength = prompt ("How long would you like your password to be? \nPlease select a number between 8 and 128");
    // Makes sure that user input is interpreted as a number.
    var passwordLength = parseInt(userPasswordLength); {
      console.log(passwordLength);
    }
    //Correct if desired password length is invalid.
    if ((passwordLength > 128) || (passwordLength < 8)) {
      alert("Passwords must be between 8 and 128 characters in length. \nWhen prompted, please enter a valid number.");
    }   
  } while ((passwordLength > 128) || (passwordLength < 8));

//Created function to add user-selected parameters to completeArray.
function addToArray (a, b, c, d, e, f, g, h) {
  if (a === true) {
    finalArray = finalArray.concat(b)
    completeArray.push(b)
  }
  if (c === true) {
    finalArray = finalArray.concat(d)
    completeArray.push(d)
  }
  if (e === true) {
    finalArray = finalArray.concat(f)
    completeArray.push(f)
  }
  if (g === true) {
    finalArray = finalArray.concat(h)
    completeArray.push(h)
  }
}
//adding in our variables (a,b= lowercase, c,d=Capital, e,f= numerals, and g,h= special)
addToArray(lowercaseConfirm, lowercaseLetters, capitalConfirm, capitalLetters, numeralConfirm, numericCharacters, specialConfirm, specialCharacters)

//for loop that genreates the user's password
for (let index = 0; index < passwordLength; index++) {
  userPassword = userPassword + finalArray[Math.floor(Math.random() * Math.floor(finalArray.length-1))];
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
