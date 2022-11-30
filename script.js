// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // YOUR CODE GOES HERE
    var special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~!";
    var numbers = "0123456789";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var upLetters = letters.toUpperCase();
    var characterLength = prompt('How many characters would you like your password to be?');
    var isUppercase = confirm('Would you like to use uppercase?');
    var isLowercase = confirm('Would you like to use lowercase?');
    var isSpecial = confirm('Would you like to use special characters?');
    var isNumber = confirm('Would you like to use numbers?');
}

console.log(Math.floor(Math.random() * 26));

if (characterLength) {
    //
}

if (isUppercase) {
    //
}

if (isLowercase) {
    //
}

if (isSpecial) {
    //
}

if (isNumber) {
    //
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
