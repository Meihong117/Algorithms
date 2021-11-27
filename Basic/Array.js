let fruits = ['Apple', 'Banana', 'Watermelon', 'Tomato','Melon']
let vegs=['Radish','Carrot','Onion','Brokerli']
let suace=['Mayo','Aioli','Rum']
let array1=[1,2,3,4]

/*-------------Array method-------------*/
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



/* -------------.forEach()-------------*/
fruits.forEach((item, index, array)=> {console.log(item)}) 
// item = Apple Banana Watermelon....
// index = 0 1 2 3 4
// array = print 5 rows [ 'Apple', 'Banana', 'Watermelon', 'Tomato', 'Melon' ]


/* ------------- loop: for, for/in, for/of, while, do/while --------------*/
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

// Array.prototype.join()
function Join(){
    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join())    // Fire,Air,Water
    console.log(elements.join(''))  // FireAirWater
    console.log(elements.join('-'));// Fire-Air-Water
}

// Array.prototype.slice()---(Classical Chunked Array problem)
const chunckArray=(arr, size)=>{
    let array1=[]
    // if size=3; i+=size: 3,6,9,...
    for(let i=0; i<arr.length; i+=size){
        array1.push(arr.slice(i, i+size))
    }
    console.log(array1)
}
chunckArray([1,2,3,4,5,6], 2)