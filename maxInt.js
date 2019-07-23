//Given an array of n elements which contains elements from 0 to n-1, with any of these numbers appearing any number of times. 
//Find these repeating numbers in O(n) and using only constant memory space.
//For example, let n be 7 and array be {1, 2, 3, 1, 3, 6, 6}, the answer should be 1, 3 and 6.
//<!------------Time complexity O(n), space complexity O(1)--------------->
function duplicateNumbers(arr, size){
    
    // var duplicateNums = [];
    // var count = 0;
    for (i = 0; i < size; i++) { 
        if (arr[Math.abs(arr[i])] >= 0) {
            arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])]; 
        }
        else {
            console.log(Math.abs(arr[i])); 
        }
        
    }
}

//<!------------Time complexity O(n^2), space complexity O(1)--------------->
// function duplicateNumbers(arr, num){
//      var duplicateNums = [];
//      var count = 0;

//      for(var i=0; i<num; i++){
//         for(var j=0; i<arr.length; j++){
//           if(arr[i]===arr[j]){
//               console.log("duplicate element");
//               duplicateNums += arr[i];
//             //   return arr[i];
//           }
//         }
       
//      }
//      console.log(duplicateNums);
// }

console.log(duplicateNumbers([1, 2, 3, 1, 3, 6, 6], 7));

var mySqrt = function(x) {
    var result = Math.sqrt(x);
    
    console.log(parseInt(result));
};

mySqrt(8);