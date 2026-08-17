function findFactorial(num){
    let factorial=1;
    for(let i=2;i<=num;i++){
        factorial = factorial*i;


    }
    return factorial;
}

function recFactorial(num){
    if(num==0)
        return 1;
    else 
    return num*recFactorial(num-1)
}

let num=6;
console.log("Fcatorial of "+num+" is "+findFactorial(num));
console.log("Fcatorial of "+num+" using recursion is "+recFactorial(num));