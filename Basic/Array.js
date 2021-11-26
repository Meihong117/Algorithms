let fruits = ['Apple', 'Banana', 'Watermelon', 'Tomato','Melon']
let vegs=['Radish','Carrot','Onion','Brokerli']
let suace=['Mayo','Aioli','Rum']

// let array_length = fruits.length 
// let find_element = fruits[0] 

/*-------------Array method-------------*/
// let add_to_the_front = fruits.unshift('Strawberry')
// let add_to_the_end = fruits.push('Orange') 
// let add_item = fruits.splice(1, 0, "Lemon", "Kiwi");
// let add_symbol=fruits.join(" * "); // Apple * Banana

// let remove_from_end = fruits.pop()
// let remove_from_front = fruits.shift() 
// let remove_item = fruits.splice(fruits, 3) // remove from 1st to 3rd items
// let remove_item_from_to=fruits.splice(2, 2, "Lemon", "Kiwi");

// let find_index = fruits.indexOf('Banana')

// let make_a_copy = fruits.slice()

// let change_element1 =fruits[0] = "Kiwi";
// let change_elemnet2 =fruits[fruits.length] = "Kiwi";

// let merging_existing_arrays= fruits.concat(vegs,suace);

// let to_string= fruits.toString();



/* -------------.forEach()-------------*/
fruits.forEach((item, index, array)=> {console.log(item)}) 
// item = Apple Banana Watermelon....
// index = 0 1 2 3 4
// array = print 5 rows [ 'Apple', 'Banana', 'Watermelon', 'Tomato', 'Melon' ]




/* ----------loop: for, for/in, for/of, while, do/while--------------*/
//--for
//for( let i=0;i<fruits.length;i++){
//    console.log(i) //0 1 2 3 4
// }

//--for...in
//for (let i in fruits){
    //console.log(i) //0 1 2 3 4 (same as 'for')
    //console.log(fruits[i]) //Apple Banana Watermelon.... (same as 'for...of')
// }

//--for...of
//for(let i of fruits){console.log(i)} //Apple Banana Watermelon....