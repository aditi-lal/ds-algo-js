/**Recursion */

function findGCD(num1,num2){
    if(num2%num1==0){
        return num1;
    }
    else{
        return findGCD(num2%num1, num1);
    }
}

/**while */

function findGCDLoop(num1,num2){
    let rem = num2%num1;
    while(rem!=0){
       
        rem = num2%num1;
        if(rem==0)
            break;
        num2 = num1;
        num1=rem;
        
    }
    return num1;
}



let num1 = 12;
let num2 =8;
let temp=num1;
if(num1>num2){
    temp=num1;
    num1=num2;
    num2 = temp;
}

console.log(findGCD(num1,num2))
console.log(findGCDLoop(num1,num2))