//Given an input string, reverse the string word by word.

//Example:

//Given s = "the sky is blue",

//return "blue is sky the".

function reverseString(a){
    var reversed = '';
    var split = a.split(" ");
    
  for(let word of split){
      reversed = word + " " +reversed;
  }
  
   return reversed;
}


// var a = "the sky is blue";
// var split = a.split(" ");

// var reversed = [];
// for(var i=split.length-1; i<=1; i--){
//     reversed.push(split[i]);
// }
// console.log(reversed);
// var c = reversed.join(" ");
// console.log(c);

console.log(reverseString('the sky is blue'));