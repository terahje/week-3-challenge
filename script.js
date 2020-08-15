// Assignment code here

// Arrays
var number =["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!", "%","&",",","*","+","-",".","/","<",">","?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumbericCharacter;
var confirmUpperCase;
var confirmLowerCase;


// Prompt to start password generation
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? 8-128 characters."));

  // if answer outside of parameters
  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Password must be between 8-128 characters. Try again.");
    var confirmLength = (prompt("How many characters would you like your password password to contain?"));
  }

  // Repeat back what the user choose for password length 
    alert("Your password will have " + confirmLength + " characters.")
    
    // Determine Character type parameters of passwords
    var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters.");
    var confirmNumbericCharacter = confirm("Click OK if you would like to include numberic characters.");
    var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters.");
    var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters.");

    // loop if no Character type parameters are selected
    while(confirmLowerCase === false && confirmUpperCase === false && confirmSpecialCharacter === false && confirmNumbericCharacter === false) {
      alert("You must choose at least one character type. Try again.");
      var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters.");
      var confirmNumbericCharacter = confirm("Click OK if you would like to include numberic characters.");
      var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters.");
      var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters.");
    }

    // Assign user choice when selected
    var passwordCharacters = []

      if(confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
      }
      
      if(confirmNumbericCharacter){
        passwordCharacters = passwordCharacters.concat(number)
      }

      if(confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
      }

      if(confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
      }

  console.log(passwordCharacters)

  // Empty string will fill based on for loop selecting random characters from the array
  var randomPassword = ""

  for(var i = 0; i < confirmLength; i++){
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
document.querySelector("#generate").addEventListener("click", writePassword);