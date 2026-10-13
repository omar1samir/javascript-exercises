const palindromes = function (string) {

    // remove white spaces, commas',', and punctuation and make it case insensitive (turn it to lower case)
    let string = str.toLowerCase();
    let word = ''

    for (let i = 0; i < string.length; i++) {
        const code = string.charCodeAt(i);

        if (code >= 48 && code <= 57
         || (code >= 65 && code <= 90) 
         || (code >= 97 && code <= 122)  
        ){
            word += string.at(i)
        }
    }

    // reverse the word 
    let reversed = '';

    for (let i = word.length - 1; i >= 0; i--){
        reversed += word.at(i)
    }

    // compare the reversed and the original
    if (reversed === word){

        return true;

    } else {

        return false;

    }

    //////////////////////////////////
    // the shorter version

    // // remove white spaces
    // let word = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    // // reverse the word
    // let reversed = word.split("").reverse().join("");
    // // compare the reversed and the original
    // return reversed === word;

};

// console.log(palindromes("omar, Ghali!!"));

// Do not edit below this line
module.exports = palindromes
