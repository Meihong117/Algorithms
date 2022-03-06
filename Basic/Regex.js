//--------------------------------------  /regexp/g is an ECMAScript1 (ES1) feature.

let text = "Is this all_there is?";
let pattern = /is/g;
let pattern1 = /_/g
let pattern2 =/[0-9]/g
// #1
let result = text.match(pattern); //[ 'is', 'is' ]
let resultLength = text.match(pattern).length //2
let result_replace = text.replace(pattern1, ' ');
// #2
let test = pattern.test(text);
let result_exec = pattern.exec(text);

console.log(result_replace)