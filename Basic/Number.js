/* Math.sign(num)
If the num is positive, returns 1.
If the num is negative, returns -1.
If the num is positive zero, returns 0.
If the num is negative zero, returns -0.
Otherwise, NaN is returned.
*/


// reverse the number 
const reverseNum=(num)=>{
    let reversedNum=parseInt(num.toString().split('').reverse().join(''))*Math.sign(num)
    console.log(reversedNum)
    
}

reverseNum(-15)