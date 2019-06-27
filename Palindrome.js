// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     var reverseStr = str.split('').reverse().join('');
//     console.log(reverseStr);
//     // reverseStr = reverseStr.join('');
//     if(str === reverseStr){
//         console.log('TRUE');
//         return true;
//     }
//     else{
//         console.log('FALSE');
//         return false;
//     }
//     // return reverseStr = str;
// }

//<!------Another Solution------!>
// function palindrome(str) {
//     var reverseStr = '';
  
//     for(var i=str.length-1; i>=0;i--){
//         reverseStr = reverseStr + str[i];
//     }
//     console.log(reverseStr);
//    // reverseStr = reverseStr.join('');
//     if(str === reverseStr){
//         console.log('TRUE');
//         return true;
//     }
//     else{
//         console.log('FALSE');
//         return false;
//     }
//     return reverseStr = str;
// }

//<!------Another Solution------!>
// Solution with 'every()' helper function

function palindrome(str){
    var reverseStr = str.split('').every((char,i) =>{
         return char === str[str.length -i-1];
    })
    return reverseStr;
}
console.log(palindrome('abba'));