//----------- find palindrome (if 'aba' return true, if 'bba' return false)
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

//---------------------double char
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