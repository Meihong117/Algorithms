/* 
================================if, else if, else
*/
function ifStatement1(){
    if(condition1){
        //if the condition1 is true, run statement_1
        statement_1
    }
    else if(condition2){
        //if condition1 is false, and condition2 is true, run statement_2
        statement_2
    }
    else{
        // all other conditions are false, run statement_3
        statement_3
    }
}
// or can write like 
function ifStatement2(){
    if(condition1) statement_1;
    else if (condition2) statement_2
    else statement_3
}

// or can write like
function ifStatement3(){
    condition? if_true_run_statement_1 : if_false_run_statement_2
}

/*
================================switch, case
*/
function switchStatement(){
    let text='sth'
    switch (text) {
        case 'sth1': // if text='sth1', run statement_1
            statement_1
            break;
        case 'sth2':
            statement_2 // else if text='sth2', run statement_2
            break;
        default: // else run statement_3
            statement_3
            break;
    }
}

//--------------------------To be a senior, a member must be at least 55 years old and have a handicap greater than 7

function openOrSenior(data){
    for(let i=0; i<data.length;i++){
      if(data[i][0]>=55 && data[i][1]>7){
         data[i]="Senior"
      }
      else data[i]="Open"
    }
      return data
    }
    console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))  // ['Open', 'Senior', 'Open', 'Senior'])