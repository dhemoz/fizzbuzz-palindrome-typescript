export{}
function checkPalindrome(text:string){
    const x = text.length;

    for (let i = 0; i < x/2; i++) {
        if (text[i].toLowerCase() !== text[x - 1 - i].toLowerCase()){
            return "It's not a palindrome";
        }
    }
    return "It is a palindrome";
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Input Text = ', string => {
  console.log(checkPalindrome(string));
  readline.close();
});
