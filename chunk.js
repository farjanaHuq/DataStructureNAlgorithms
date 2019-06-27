// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
    
//     var tempArr = [];
//     var arr =[];
//     for(var i=0; i<array.length; i++){
//         const lastElement = tempArr[tempArr.length-1];
//         if(!lastElement || lastElement.length===size){
//             // arr = arr[i];
//             tempArr.push(array[i]);
//         }
//         else{
//             lastElement.push(array[i]);
//         }

//     }
//     return tempArr;
// }
//array.slice(startIndex, endIndex) => copy the elements of an array from start index to endIndex, but not including 
//the element at end Index.
function chunk(array, size){
    const tempArr = [];
    for(var i=0; i<array.length-1; i+=size){
        var chunk = array.slice(i, i+size);
        tempArr.push(chunk);
    }
    return tempArr;
}
var result = chunk([1,2,3,4,5,6,7,8], 3);
console.log(result);