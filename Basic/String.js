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

//-------------------------- make the first word to uppercase
String.prototype.toJadenCase = function() {
  var result = this; // call string ="this is a test"
  //split the statement into each word
  if (this.length !== 0) {
      function str(word) {
          // 1st letter to capitalize then plus rest of letters
          return word.substring(0, 1).toUpperCase() + word.substring(1);
        }
      result = this.split(" ").map(str).join(" ");
  }
  // return result;
};
console.log("this is a test".toJadenCase()); //This Is A Test
console.log("oneword".toJadenCase()); //Oneword
console.log("blank: " + ("".toJadenCase())); //blank: 



//---------------------- Build a pyramid-shaped tower --output array 
function towerBuilder(n) {
  let result=[]
  for(let i=1; i<= n; i++){
    let str = ' '.repeat(n-i);
    let str2 = '*'. repeat(i*2 -1)
    result.push(str + str2 + str);
  }
  return results
}
// Build a pyramid-shaped tower --tower shape
function towerBuilder(n) {
  for(let i=1; i<= n; i++){
    let str = ' '.repeat(n-i);
    let str2 = '*'. repeat(i*2 -1)
    console.log(str + str2 + str);
  }
}
console.log(towerBuilder(1)) // ["*"]
console.log(towerBuilder(2)) // [ ' * ', '***' ]
console.log(towerBuilder(3)) // [ '  *  ', ' *** ', '*****' ]


//-------------------- find the double character in string
function solution(S) {
  var count = {};
  S.split('').forEach(function(s) {
      count[s] ? count[s]++ : count[s] = 1;
  });
  let arr = Object.values(count);
  let arr1 = Object.keys(count);

  for(let i=0;i<arr.length;i++){
    if(arr[i]>1){
        return arr1[i]
    }
  }
}
console.log(solution('abb')) // 21
console.log(solution('aba')) // 21
console.log(solution('zz')) // 21
console.log(solution('zzsjehfyrn')) // 21

//-------------------- IP Validation: check contain any special charater...
function isValidIP(str) {
  let string= str.split('.')
  var regExp = /^0[0-9].*$/
  let space=/\s/g
  let count=0
  let match = /\n/;
  let matchCharater=/[a-z]/i
  for(let i of string){
    
    let num=parseInt(i)
    console.log(num)
    if(string.length!=4 ||  (0<num && num>255) || isNaN(num) || match.exec(i) || regExp.test(i) || space.test(i) || i.match(matchCharater ) || i.includes("-")){
      count+=1
    }
  }
  if(count>0) return false
  else return true
}
// return true
// console.log(isValidIP("0.0.0.0"))
// console.log(isValidIP("12.255.56.1"))
// console.log(isValidIP("137.255.156.100"))

// return false

// console.log(isValidIP('abc.def.ghi.jkl'))
// console.log(isValidIP('123.456.789.0'))
// console.log(isValidIP('12.34.56'))
// console.log(isValidIP('\n1.2.3.4'))
// console.log(isValidIP('01.02.03.04'))

// console.log(isValidIP('1e0.1e1.1e2.2e2')) 
// console.log(isValidIP(' 1.2.3.4'))
// console.log(isValidIP('1.2.3.4 '))
console.log(isValidIP('12.34.56.-7')) 
  
  
//-------------------- Extract the domain name from a URL
function domainName(url){
  var domain = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0].split('.')[0];
  return domain
}

console.log(domainName("http://google.com")) //google
console.log(domainName("http://google.co.jp")) //google
console.log(domainName("https://youtube.com")) //youtube
console.log(domainName("www.xakep.ru")) //xakep

//-------------------- String incrementer: add 1 
function incrementString (strng) { 
  if(strng.length>0){
      let num = strng.match(/\d+/g)
      var letr =  strng.match(/[a-zA-Z]+/g)[0];
      let result
      
      if(num){
          let convert_to_num=parseInt(num[0])
          let add_one=convert_to_num+1 //2
          let to_string=add_one.toString() //string
          let sub_result
          if(to_string.length==1){
              sub_result=to_string.padStart(3, '0')
              result= letr+sub_result
          }
          else if(to_string.length==2 && convert_to_num<99) {
              sub_result=to_string.padStart(2, '0')
              result= letr+sub_result
          }
          else result= letr+add_one
      }
      else{
      let add=  strng.concat('1')
      result=add
      }
      return result
  }
  else return "1"
  
}

console.log(incrementString("foobar001")) //foobar002
console.log(  incrementString("foobar99")) //foobar100
console.log(incrementString("foo"))//foo1
console.log(incrementString("")) //1
