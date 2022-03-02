// method 1
function disemvowel(str) {
    let a=''
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e" ||str[i]=="i" || str[i]=="o" || str[i]=="u" || str[i]=="A" || str[i]=="E" ||str[i]=="I" || str[i]=="O" || str[i]=="U"){
            str[i]=' '
        }else{
            a += str[i]
        }
    }
    console.log(a) ;
  }


// method 2
//   function disemvowel(str) {
//     var alphabets = [ 'a', 'e', 'i', 'o', 'u',
//     'A', 'E', 'I', 'O', 'U' ];
//     var res = "";
//     for(var i = 0; i < str.length; i++)
//     {
//         if (!alphabets.includes(str[i]))
//         {
//             res += str[i];
//         }
//     }
//     console.log(res) ;
//   }

//method 3
// function disemvowel(str) {
//     const newstr = str.replace(/[aeiou]/gi, '');
//     console.log(newstr);
//   }


//test 
disemvowel("This website is for losers LOL!")