//-------------------------------------------- find palindrome (if 'aba' return true, if 'bba' return false)
const palindrome=(str)=>{
    const isPalindrome=str.split('').reverse().join('')
    // console.log(str===isPalindrome)
}
// palindrome('abbf')

// another way
(function(str){
    let reversed=''
    for(let x of str){
        reversed=x+reversed // a ba bba fbba
    }
    // console.log(str===reversed)
})('abbf')

//------------------------------------------- double char
function doubleChar(str){
    let a=''
    for(let i=0;i<str.length;i++){
        let b=str[i]+str[i]
        a+=b
    }
    console.log(a)
}
//test
doubleChar("String")

//------Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
    let newstr = str.toLowerCase()
    let countO = (newstr.match(/o/g) || []).length
    let countX = (newstr.match(/x/g) || []).length

    if (countO == countX) console.log('true')
    else console.log('false')
}
XO('sdsdsd') //true
XO('xo') //ture 
XO("xxOo")//ture
XO("xxxm")//false
XO("Oo")//false
XO("ooom")//false


//--------------------------------------  /regexp/g is an ECMAScript1 (ES1) feature.

let text = "Is this all_there is?";
let pattern = /is/g;
let pattern1 = /_/g
// #1
let result = text.match(pattern); //[ 'is', 'is' ]
let resultLength = text.match(pattern).length //2
let result_replace = text.replace(pattern1, ' ');
// #2
let test = pattern.test(text);
let result_exec = pattern.exec(text);

console.log(result_replace)