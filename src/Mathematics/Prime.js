
function checkPrime(num){
    if(num==1){
        return 'No'
    }
    let isPrimeNumber = 'Yes'
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            isPrimeNumber= 'No';
            break;
        }

    }
    return isPrimeNumber;
}



let num =22;
console.log("Is "+num+" prime?"+checkPrime(num));