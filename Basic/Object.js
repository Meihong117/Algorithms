let object={
    name:'dd',
    age: 25,
    job: 'dddd'
}
object.addNew='sss'  // add new key and value
object.name='new Name' // change to new name
delete object.name // delete key and value

// ---------------- find the maximun character in a string 
const maxCharacter=(str)=>{
    let obj={}
    for (let char of str){ //char= a b b b b  c
        // if no char, value=1, others++
        !obj[char]? obj[char]=1:obj[char]++
        console.log(obj[char])
    }
    //console.log(obj) // { a: 1, b: 4, c: 1, '*': 2 }
    // find max char
    let maxNum=0
    let maxNumChar='';
    for (let i in obj){ //i = a b c *
        //console.log(i) // 1 4 1 2
        if(obj[i]>=maxNum){
            maxNum=obj[i]
            maxNumChar=i
        }
    }
    // console.log(`${maxNumChar} appears ${maxNum} times`)
}
maxCharacter('abbbbc**')