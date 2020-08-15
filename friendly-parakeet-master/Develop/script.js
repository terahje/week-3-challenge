// Assignment code here

// variable Declaration 
var confirmLength = "";


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
