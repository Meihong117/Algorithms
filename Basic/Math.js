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