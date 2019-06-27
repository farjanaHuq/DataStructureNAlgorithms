// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
    
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     }
//     for(let char in aCharMap){
//         if(aCharMap[char]!==bCharMap[char]){
//             return false;
//         }
//     }
//     return true;
  
// }

// function buildCharMap(str){
//     var charMap = {};
//     var theStr = str.replace(/[^\w]/g, '').toLowerCase();

//     for(let char of theStr){
//         if(!charMap[char]){
//             charMap[char]=1
//         }else{
//             charMap[char]++;
//         }
//     }
//     //  console.log(charMap);
//     return charMap;
// }

//============================other solutiom=========================

function anagrams(stringA, stringB){
     return cleanString(stringA) === cleanString(stringB)
}
function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split().sort().join('');
}
// anagrams('rail safety', 'fairy tales');
console.log(anagrams('rail safety', 'fairy tales'));
// anagrams('RAIL! SAFETY!', 'fairy tales');
console.log(anagrams('Hi there', 'Bye there'));

// buildCharMap('fairy tales');