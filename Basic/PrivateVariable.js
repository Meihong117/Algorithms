//------ how to create a private variable
function secretVariable(){
    let private='Private here' //private variable
    return function(){ // private function
        return private
    }
}

let getPrivateVariable = secretVariable()
console.log(getPrivateVariable()) //Private here
console.log(secretVariable()) //[Function]


//------ what is the output?
let num=4 //nothing
function outer(){
    let num=2 //nothing 
    function inner(){
        //num++ //undefined
        let num=3;
        console.log(num)
    }
    inner() // run inner function
}
outer() // run inner function then the output will be 3

//----------- what is the output?
let hero={
    _name:'John Doe',
    getSecretIdentity:function(){
        return this._name
    }
}
let stoleSecretIdentity=hero.getSecretIdentity
let stoleSecretIdentity1=hero.getSecretIdentity.bind(hero)

//console.log(stoleSecretIdentity) // [Function: getSecretIdentity]
//console.log(stoleSecretIdentity()) // undefined
//console.log(hero.getSecretIdentity()) // John Doe



