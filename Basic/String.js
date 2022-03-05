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
let pattern2 =/[0-9]/g
// #1
let result = text.match(pattern); //[ 'is', 'is' ]
let resultLength = text.match(pattern).length //2
let result_replace = text.replace(pattern1, ' ');
// #2
let test = pattern.test(text);
let result_exec = pattern.exec(text);

console.log(result_replace)

//------------------------- sort the string with the number order
function order(words){
    function name(a,b){
        return a.match(/\d/)-b.match(/\d/)
    }
    let new_words= words.split(' ').sort(name).join(' ')
    console.log(new_words) // Thi1s is2 3a T4est
  }

  order("is2 Thi1s T4est 3a")
  order("4of Fo1r pe6ople g3ood th5e the2")

//------------------------- return the middle character of the word
  function getMiddle(str){
    //find the position to print out
    var position, length;
    if ((str.length % 2) == 0) {
      position = str.length / 2 - 1; 
      length = 2;
    } else {
      position = (str.length - 1) / 2; 
      length = 1;
    }
    return str.substring(position, position + length) ;
}
console.log(getMiddle("test")) 
console.log(getMiddle("testing")) 

//ex
const str = 'Mozilla';
console.log(str.substring(1, 3)); //"oz"
console.log(str.substring(2)); //"zilla"



