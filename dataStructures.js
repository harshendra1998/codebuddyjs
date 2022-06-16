// level {2}

// 1.
const input = [1, 3, 4, 6, 7, 8];
var output = input.filter(number=>{if(number/2 !== parseInt(number/2)){return number}})
console.log(output)

// 2.

const input2 = 'Elie';
const tempsplit = input2.split('');
var temp = tempsplit.map(char=>{if('aeiou'.includes(char)){return char.toUpperCase()} else{return char}})
var output2 = tempsplit.join('');
console.log('output',output2)

// 3.

const input3 = [1, 3, 4, 6, 7, 8, 2, 5];
var output3 = Math.max(...input3)
console.log(output3)