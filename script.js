//Generate a button that will generate a password.
var generateBtn = document.querySelector("#generate");

//List all possible password characters in appropriate arrays and define a database to hold them. Arrays within 'allCharacters' use colons instead of equals signs.

var allCharacters = {

  numbers: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  lowerCase: [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ],
  upperCase: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
  specialChar: [ "\"", " ", "!", "#", "$", "%", "&", "'", "(",")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~" ]
}

  //Create the primary function for generating a password.
  function generatePassword() {

  //Declare a new variable array of characters to use. Scope issue?
  var charactersToUse = [];

  // Dictate password length
  var passwordLength = parseInt(prompt("First, we must define your password length. Choose a number between 8 and 128."));

  if (passwordLength <= 8 || passwordLength >= 128) {
    alert("Your password must be between 8 and 128 characters.");
    return;
  }

    //See if the user wants to use use numbers and, if so, push that information in the 'charactersToUse' array.
    var usingNumbers = confirm("Would you like to use numbers in your password?");

    if (usingNumbers) {
      charactersToUse = charactersToUse.concat(allCharacters.numbers);
    }

    //See if the user wants to use lowercase letters and, if so, push that information in the 'charactersToUse' array.
    var usingLowers = confirm("Would you like to use lowercase letters in your password?");

    if (usingLowers) {
      charactersToUse = charactersToUse.concat(allCharacters.lowerCase);
    }

    //See if the user wants to use Uppercase and, if so, push that information in the 'charactersToUse' array.
    var usingUppers = confirm("Would you like to use uppercase letters in your password?");

    if (usingUppers) {
      charactersToUse = charactersToUse.concat(allCharacters.upperCase);
    }

    //See if the user wants to use special characters and, if so, push that information in the 'charactersToUse' array.
    var usingSpecials = confirm("Would you like to use special characters in your password?");

    if (usingSpecials) {
      charactersToUse = charactersToUse.concat(allCharacters.specialChar);
    }

    //If the user fails to decide upon a single character type send them an alert and start over.
    if (!usingNumbers && !usingLowers && !usingUppers && !usingSpecials) {
      alert("You must choose at least one character type for your password.")
      return;
    }

    //Let the user know how long their password is going to be and how many of which types of characters it will have.
    alert("Your password shall be: " + passwordLength + " characters in length and shall be composed of " + usingLowers + 
    " lowercase letters, " + usingUppers + " uppercase letters, " + usingNumbers + " numerical characters, and " + 
    usingSpecials + " special characters.");

    // An empty vessel for our loop to add variable to:
    var password = [];

    //randomly select "randomCharacter" from "charactersToUse"
    //append "randomCharacter" to "password" string

    while (!(password.length < passwordLength)) {
  
    
    }

}
// return password;??????Why did this head off console.log(numbers)?????

// Assignment Code


// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// <!--### Instructions

// * Write JavaScript code that does the following:
// * Using a confirm, ask the user, "Do you like \_?" Store their response in a variable.
// * Using a prompt, ask the user, "What kind of \_ do you like?" Store their response in a variable.
// * Alert both variables to the screen.-->