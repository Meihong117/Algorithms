//-----------Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (3+5=8)

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...

function rowSumOddNumbers(n) {
	return n * n * n;
}
console.log(rowSumOddNumbers(42)) 

//------------------check if a,b,c can make triangle
function isTriangle(a,b,c)
{
  if(a>=0 || b>=0 || c>=0){
    if(a+b>c && a+c>b && c+b>a){
      return true
    }
  }
   return false;
}
console.log(isTriangle(1,2,2)) 
console.log(isTriangle(7,2,2)) 

//-------------------- find next square
// method 1
function findNextSquare(sq) {
  var root1;
  var nextroot;
  if(Math.sqrt(sq)%1 ===0){
       root1=Math.sqrt(sq)
       nextroot=root1+1
  }else{
      return -1;
  }
  return nextroot*nextroot;
}
// or 
// method 2:
function findNextSquare(sq){
  return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
}

console.log(findNextSquare(121)) //144
console.log(findNextSquare(625) ) //676
console.log(findNextSquare(319225) ) //320356
console.log(findNextSquare(15241383936)) //15241630849