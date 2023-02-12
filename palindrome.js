"use strict";
exports.__esModule = true;
function checkPalindrome(text) {
    var x = text.length;
    for (var i = 0; i < x / 2; i++) {
        if (text[i].toLowerCase() !== text[x - 1 - i].toLowerCase()) {
            return "It's not a palindrome";
        }
    }
    return "It is a palindrome";
}
console.log(checkPalindrome("anna"));
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Input Text = ', function (string) {
    console.log(checkPalindrome(string));
    readline.close();
});
