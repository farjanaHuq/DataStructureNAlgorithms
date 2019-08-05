// Given an array A of integers and another non negative integer k, 
// find if there exists 2 indices i and j such that A[i] - A[j] = k, i != j.

// Example :

// Input :

// A : [1 5 3]
// k : 2

function diffPossible(A, k){
    
    A.sort();
    var j=1;
    var i=0;
    while(i<A.length&&j<A.length){
       if(i!==j && k===Math.abs(A[j]-A[i])){
           return 1;
       }
       
        else if(Math.abs(A[j]-A[i])<k){
               j++;
            }
        else{
               i++;
           }
       }
   
   return 0; 
}


var arr = [1,5,3];
console.log(diffPossible(arr, 3));