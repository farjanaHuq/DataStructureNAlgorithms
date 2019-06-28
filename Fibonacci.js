// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//================Iterative solution=====================

function fib(n){
    const result = [0,1];
    for(let i=2; i<=n; i++){
        const n1 = result[i-1];
        const n2 = result[i-2];
        result.push(n1+n2);
    }
    // console.log(result[n]);
    return result[n];
}

//================Recursive solution=====================
function fibonacci(num){
    if( num<2){
        return num;
    }
    return fibonacci(num-1)+fibonacci(num-2);
}

console.log(fib(31))
console.log(fibonacci(31));