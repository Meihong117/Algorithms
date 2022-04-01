//Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. This chapter describes JavaScript regular expressions. 

//Using a regular expression literal, which consists of a pattern enclosed between slashes, as: const re = /ab+c/;



// Character classes:         \, ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// Assertions:                ^, $, x(?=y), x(?!y), (?<=y)x, (?<!y)x, \b, \B
// Groups and ranges:        (x), (?:x), (?<Name>x), x|y, [xyz], [^xyz], \Number
// Quantifiers:               *, +, ?, x{n}, x{n,}, x{n,m}
// Unicode property escapes:  \p{UnicodeProperty}, \P{UnicodeProperty}


//The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches.
const dot=/.y/g
const test1='yes make my day'
//console.log(test1.match(dot)) //[ 'my', 'ay' ]

const d=/\d/g
const Dd=/\D/g
const test2='B2 is the suite number'
// console.log(test2.match(d)) //['2']
// console.log(test2.match(Dd))

const s=/\S/g
const test3='foo bar'
// console.log(test3.match(s)) //[' ']

const a=/^A/
const test4='a in A'
// console.log(test4.match(a))

let buggyMultiline = `tey, ihe light-greon apple 
tangs on ihe greon traa`;
// 1) Use ^ to fix the matching at the beginning of the string, and right after newline.
buggyMultiline = buggyMultiline.replace(/^t/gim,'h');
console.log(1, buggyMultiline);
// 2) Use $ to fix matching at the end of the text.
buggyMultiline = buggyMultiline.replace(/aa$/gim,'ee.');
console.log(2, buggyMultiline);
// 3) Use \b to match characters right on border between a word and a space.
buggyMultiline = buggyMultiline.replace(/\bi/gim,'t');
console.log(3, buggyMultiline);
fixedMultiline = buggyMultiline.replace(/\Bo/gim,'e');
console.log(4, fixedMultiline); 




//---------------- .replace() Phone Directory
function phone(strng, num) {
    let string= strng.split('\n')
    let name
    let address
    let count=0
    
    let list=[]
    for(let i of string){
        if(i.includes(num)){
            count+=1
            list=i
        }
    } 
   
    if(count==1 ){
        let name_match=list.match(/\<.*\>/g)
            name= name_match[0].slice(1,-1)
        
            let add=list.replace(name_match,'')
            let adre=add.replace((`+${num}`),'')
            address=adre.trim()
            address=address.replace('; ','')
            address=address.replace('/ ','')
            address=address.replace('$ ','')
            address=address.replace('_',' ')
            address=address.replace('  ',' ')
            
            return `Phone => ${num}, Name => ${name}, Address => ${address}` 
    }
    if(count>1) return `Error => Too many people: ${num}` 
    if(count==0) return `Error => Not found: ${num}`
}

const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
+ "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
+ "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
+ "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
+ "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
+ "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
+ "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
+ "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n   <P Salinger> Main Street, +1-098-512-2222, Denver\n"
+ "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
+ "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
+ "<P Salinge> Main Street, +1-098-512-2222, Denve\n"

// console.log(phone(dr, "48-421-674-8974")) //Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma
//console.log(phone(dr, "1-921-512-2222")) //Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209
console.log(phone(dr, "1-498-512-2222")) //Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado





