// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // YOUR CODE GOES HERE
    var special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~!";
    var numbers = "0123456789";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var upLetters = letters.toUpperCase();
    var isUppercase = confirm('Would you like to use uppercase?');
    var isLowercase = confirm('Would you like to use lowercase?');
    var isSpecial = confirm('Would you like to use special characters?');
    var isNumber = confirm('Would you like to use numbers?');
}

if (isUppercase) {
    // Use Uppercase Letters
    console.log('uppercase');
    alert('Click OK to confirm use of uppercase letters.');
}

if (isLowercase) {
    // Use Lowercase Letters
    console.log('lowercase');
    alert('Click OK to confirm use of lowercase letters.');
}

if (isSpecial) {
    // Use Special Characters
    console.log('special');
    alert('Click OK to confirm use of special characters.');
}

if (isNumber) {
    // Use Numbers
    console.log('numbers');
    alert('Click OK to confirm use of numbers.');
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
