// Given an unsorted sequence a[], the task is to find the K-th missing contiguous element 
// in the increasing sequence of the array elements 
// i.e. consider the array in sorted order and find the kth missing number. 
// If no k-th missing element is there output -1.

// Input: arr[] = {2, 4, 10, 7}, k = 5
// Output: 9
// Missing elements in the given array: 3, 5, 6, 8, 9
// 5th missing is 9.

// Input: arr[] = {1, 3, 4}, k = 5
// Output: -1

function missingElement(arr,k){
    let sortedArr = arr.sort(function(a,b){
        return a-b;
    });
    let min = sortedArr[0];
    let max = sortedArr[arr.length-1]
    var nthElem = min+1; 
    var missingElemArr = [];
    k=k+1;
    
    while(k){
  
        if(nthElem>min && nthElem<max){
            if(!matchElement(sortedArr, nthElem)){
                missingElemArr.push(nthElem);
            }
        }
        else{
            return -1;
        }
        
        nthElem++;
        k--;
    }
   return missingElemArr;
}
 
 function matchElement(arr, elem){  
    for(var i=0; i<arr.length; i++){
        if(arr[i] === elem){
            return true;
        }
    }
 }
 var arr1= [2, 4, 10, 7];
 var arr2 = [1, 3, 4];
 console.log(missingElement(arr2, 5));