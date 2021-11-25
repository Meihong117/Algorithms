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