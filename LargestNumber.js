//Given a list of non negative integers, arrange them such that they form the largest number.

//For example:

//Given [3, 30, 34, 5, 9], the largest formed number is 9534330.

//join the array
//split the string to single element
//sort the array
//convert the array to a string 
//return srting


var largestNumber = function(A){
    var str = A.join("");
    var strArr = [];
    for(let char of str){
        strArr.push(char);
    }
    var largestNum = strArr.sort(function(a,b){return b-a}).join("");
    return largestNum;
}

let A = [8, 89];
console.log(largestNumber(A));



// var str = A.join("");
// var sorted = [];

// console.log(str);

// for(let char of str){
//     strArr.push(char);
// }
// var largestNum = strArr.sort(function(a,b){return b-a}).join("");
// console.log(sorted);
// console.log(largestNum);


