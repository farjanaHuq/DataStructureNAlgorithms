//Given a list of non negative integers, arrange them such that they form the largest number.

//For example:

//Given [3, 30, 34, 5, 9], the largest formed number is 9534330.

//join the array
//split the string to single element
//sort the array
//convert the array to a string 
//return srting


var largestNumber = function(A){
     var str = A.join(" ");
     var i = 0;
     while(str){

         A.sort(function(x,y){
            x = str.charAt(i);
            y = str.charAt(i+1);
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
         })
         
         i++;
     }
     
     return str;
    
}

let A = [3, 30, 34, 5, 9];
var B = A.join("")
// var c = Number(B);
// console.log(c);
console.log(largestNumber(A));