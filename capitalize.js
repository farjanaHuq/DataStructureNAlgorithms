// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const finalArr = [];
    const sentence = str.split(' ');

    // for(let i=0; i<sentence.length; i++){
    //       console.log(sentence[i]);
    //       var str = sentence[i];
    //       var changedStr = str[0].toUpperCase() + str.slice(1);
    //       finalArr.push(changedStr);
    // }
    for(let elem of sentence){
        finalArr.push(elem[0].toUpperCase() + elem.slice(1));
    }
    console.log(finalArr.join(' '));
    return finalArr.join(' ');
}
capitalize('a short sentence');
// console.log(capitalize('a short sentence'));