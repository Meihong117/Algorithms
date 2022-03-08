let fruits = ['Apple', 'Banana', 'Watermelon', 'Tomato','Melon']
let vegs=['Radish','Carrot','Onion','Brokerli']
let suace=['Mayo','Aioli','Rum']
let array1=[1,2,3,4]

/*----------------------------------------------Array method-------------*/
let array_length = fruits.length 
let find_element = fruits[0] 
let change_element1 =fruits[0] = "Kiwi";
let change_elemnet2 =fruits[fruits.length] = "Kiwi";
let map1 = array1.map(x => x * 2)

let add_to_the_front = fruits.unshift('Strawberry')
let add_to_the_end = fruits.push('Orange') 
let add_to_start_n_end = ['start', ...fruits, 'end'] // add 'start' at the beginning & add 'end' at the end
let add_item = fruits.splice(1, 0, "Lemon", "Kiwi");

let remove_from_end = fruits.pop()
let remove_from_front = fruits.shift() 
let remove_item = fruits.splice(fruits, 3) // remove from 1st to 3rd items
let remove_item_from_to=fruits.splice(2, 2, "Lemon", "Kiwi");

let find_index = fruits.indexOf('Banana')

let make_a_copy = fruits.slice()

let merging_existing_arrays= fruits.concat(vegs,suace);

let to_string= fruits.toString();



/* ------------------------------------------------.forEach()-------------*/
fruits.forEach((item, index, array)=> {console.log(item)}) 
// item = Apple Banana Watermelon....
// index = 0 1 2 3 4
// array = print 5 rows [ 'Apple', 'Banana', 'Watermelon', 'Tomato', 'Melon' ]


/* ------------------------------------------------loop: for, for/in, for/of, while, do/while --------------*/
//--for
for( let i=0;i<fruits.length;i++){
   console.log(i) //0 1 2 3 4
}

//--for...in 
for (let i in fruits){
    console.log(i) //0 1 2 3 4 (same as 'for')
    console.log(fruits[i]) //Apple Banana Watermelon.... (same as 'for...of')
}

//--for...of
for(let i of fruits){console.log(i)} //Apple Banana Watermelon....

//-------------------------------------------------.join()
function Join(){
    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join())    // Fire,Air,Water
    console.log(elements.join(''))  // FireAirWater
    console.log(elements.join('-'));// Fire-Air-Water
}

//-------------------------------------------------.slice()---(Classical Chunked Array problem)
const chunckArray=(arr, size)=>{
    let array1=[]
    // if size=3; i+=size: 3,6,9,...
    for(let i=0; i<arr.length; i+=size){
        array1.push(arr.slice(i, i+size))
    }
    console.log(array1)
}
chunckArray([1,2,3,4,5,6], 2)

//--------------------------------------------------.includes()
const array11 = [1, 2, 3];
console.log(array11.includes(2)); // expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // expected output: true
console.log(pets.includes('at')); // expected output: false

//--------------------------------------------------.replace()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
console.log(p.replace(/Dog/i, 'ferret'));


//------------------------------------- find the unique array element
function findUniq(arr) {
    let array= arr[0]
   for(let i=1; i<arr.length; i++){
     if(array-arr[i]>0)return array
     else if(array-arr[i]<0) return arr[i]
   }
 }
 console.log(findUniq([ 1, 0, 0 ])) //1
 console.log(findUniq([ 0, 0, 1 ]))  //1
 console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) //2
 console.log(findUniq([ 1, 1, 2, 1, 1 ])) //2
 console.log(findUniq([ 3, 10, 3, 3, 3 ])) //10

 //------------------------------------ filter one array from another array elements
 function arrayDiff(a, b) {
  if(a.length==0 || b.length==0){
    return a
}
else{
  function filterB(value){
     //console.log(value) //value is the elements in a
      console.log(!b.includes(value)) 
  }
  const result = a.filter(filterB) //filter when return false from func filterB
  // return result 
  }
}
//console.log(arrayDiff([], [4,5])) //[]
console.log(arrayDiff([3,4], [3])) //[4]
//console.log(arrayDiff([1,8,2], [])) //[1,8,2]
console.log(arrayDiff([1,2,3], [1,2])) //[3]


//---------------------- check if match
// mrthod 1
function validBraces(braces){
    let tracer = []
    for(let i=0;i < braces.length; i++){
      if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
        tracer.push(braces[i])
        // console.log('tracer push: ',tracer)
      } else{
        if(tracer.length === 0) return false
        let lastValue = tracer[tracer.length-1]
        if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
        {
          tracer.pop() // remove last value
        //   console.log('tracer pop: ',tracer)
        } else {
          break;
        }
      }
    }
    return tracer.length === 0
  } 
// method 2
const regex = /\(\)|\[\]|\{\}/;
const validBraces = braces => regex.test(braces)
  ? validBraces(braces.replace(regex, ''))
  : '' === braces


console.log(validBraces('{{}}')) // true
// console.log(validBraces('{{[]}}')) // true
// console.log(validBraces('{[{}]}')) // true
// console.log(validBraces('({{}})')) // true
// console.log(validBraces('{[()]}')) // true
// console.log(validBraces('{{}[}')) // false
// console.log(validBraces('{{]}}')) // false
// console.log(validBraces('()))')) // false
// console.log(validBraces('{({}}')) // false
// console.log(validBraces('((}}')) // false
// console.log(validBraces('}[)}')) // false


// ------------------------checks whether the two arrays have the "same" elements

function comp(array1, array2){
  let  result2=[]
  for (let i of array2){
    result2.push(Math.sqrt(i))
  }
  let new_result2=result2.sort((a, b) => a - b)
  let new_result1=array1.sort((a, b) => a - b)
  for (let i=0;i<array1.length;i++){
    if (new_result2[i]==new_result1[i]) return true
    else return false
  }
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1, a2)) // true

//-------------------- remove the smallest element and return rest array 
function removeSmallest(arr) {
 
  let findSmallest=Math.min(...arr) // 1
  let findIndex=arr.indexOf(findSmallest) //0
  arr.splice(findIndex ,1) 
  return arr;
}

console.log(removeSmallest([1, 2, 3, 4, 5])) // [ 2, 3, 4, 5 ]
console.log(removeSmallest([5, 3, 2, 1, 4])) // [ 5, 3, 2, 4 ]
console.log(removeSmallest([2, 2, 1, 2, 1])) // [ 2, 2, 2, 1 ]

//------------------------ calculate  the whole time in queue
// element in the array is the time people consume, n=till numbers
function queueTime(customers, n) {
  const sumarray = customers.reduce((a,b) => a+b, 0);
  const uniqueNums = [...new Set(customers)];
  const removeDuplicateSum=uniqueNums.reduce((a,b) => a+b, 0);
  const findMax=Math.max(...customers)

  if(n==1) {
    return sumarray
  }
  if(n>=2 && sumarray>n){
    return removeDuplicateSum
  }
  if(n>=2 && sumarray<n){
    return findMax
  }
}

console.log(queueTime([], 1)) // 0
console.log(queueTime([1,2,3,4], 1)) // 10
console.log(queueTime([2,2,3,3,4,4], 2)) // 9
console.log(queueTime([1,2,3,4,5], 100)) // 5


