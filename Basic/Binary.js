//---------------- convert the equivalent binary value to an integer.
const binaryArrayToNumber = arr => {
    const binaryString = arr.join(""); //0001
    //parseInt(string, radix) radix will be= 2,8,10,12,16,20,60
    let i= parseInt(binaryString, 2);
    console.log(i)
  };

  binaryArrayToNumber([0,0,0,1])

//---------------- integer -> binary -> count how many 1 in the binary
var countBits = function(n) {
  let count=0
  if(n>=0){
   let bi= (n >>> 0).toString(2);
   let a=bi.split('')
   for(let i of a){
       if(i==1) count+=1
   }
    return count
  }
 };
console.log(countBits(0)) 
console.log(countBits(4)) //1
console.log(countBits(7)) //3
console.log(countBits(9))  //2
// console.log(countBits(10)) //2