// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for each character set
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = "!@#$%^&*()-+";
var number = '0123456789';



// Begins password generation

function writePassword() {
    var password = generatePassword()

    // Selects Password ID to place on document
    var passwordText = document.querySelector("#password");



    passwordText.value = password;

}

function generatePassword() {

    // User chooses length of password 

    var passwordLength = parseInt(prompt("How many characters would you like your password to be?"))
    console.log(passwordLength)

    // if user doesn't pick 8 or more, end app with error

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be more than 8 characters and less than 128 characters");
        console.log(passwordLength)
        return null;
    } else {

        // Ask yes/no for each type of character (lowercase, uppercase, numeric, special)

        confirmLowercase = confirm("Would you like a lowercase letter? Click OK for yes");
        confirmUppercase = confirm("Would you like a uppercase letter? Click OK for yes");
        confirmNumber = confirm("Would you like to include a number? Click OK for yes");
        confirmSpecial = confirm("Would you like a special character? Click OK for yes");

    }

    if (confirmLowercase === false && confirmUppercase === false && confirmNumber === false && confirmSpecial === false) {

        // if user says no to all, end app with error that they should pick at least 1

        alert("Password must have at least one lowercase, uppercase or special character");
        return null;
    }

    // variables for character generation

    var userInputs = null
    var randomValue = ""

    // for the number of characters that the user picks, concatonate based off of character sets

    if (confirmLowercase === true) {
        userInputs += lowercase
    }

    if (confirmUppercase === true) {
        userInputs += uppercase
    }

    if (confirmNumber === true) {
        userInputs += number
    }

    if (confirmSpecial === true) {
        userInputs += special
    }

    // Generates the password loop 
    for (let i = 0; i < passwordLength; i++) {
        randomValue += userInputs.charAt(Math.floor(Math.random() * userInputs.length));
        console.log(randomValue)
    }
    return randomValue;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)