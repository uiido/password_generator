// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // YOUR CODE GOES HERE
    // Passcode characters to select
    var special = ["#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "!"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // Prompts for password
    var isUppercase = confirm('Would you like to use uppercase letters?');
    var isLowercase = confirm('Would you like to use lowercase letters?');
    var isSpecial = confirm('Would you like to use special characters?');
    var isNumber = confirm('Would you like to use numbers?');
    var characterLength = prompt('How many characters would you like your password to be?');
    var passArray = [];
    var finalArray = [];


    // If statements - selects values for each type + adds values to the password currently being generated
    if (isUppercase) {
        passArray = passArray.concat(upperLetters);
    }

    if (isLowercase) {
        passArray = passArray.concat(lowerLetters);
    }

    if (isSpecial) {
        passArray = passArray.concat(special);
    }

    if (isNumber) {
        passArray = passArray.concat(numbers);
    }

    if (characterLength < 8 || characterLength > 128) {
        // Alert to only input a number; keeps length between 8 and 128
        alert('Password must be a number between 8 and 128 characters!');
        return generatePassword();
    } else {
        // Sets character lengths + randomizes characters
        console.log([...passArray]);
        for (var i = 0; i < characterLength; i++) {
            var randIndex = Math.floor(Math.random() * passArray.length);
            console.log(randIndex);
            finalArray.push(passArray[randIndex]);
        }

        return finalArray.join('');
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
