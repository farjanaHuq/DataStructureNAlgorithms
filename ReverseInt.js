// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {

    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed)*Math.sign(num);
}
console.log(reverseInt(51));
console.log(reverseInt(-4));
console.log(reverseInt(-900));

// var num = 200;
// console.log(num.toString());
