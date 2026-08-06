function getNumReverse(num){
    let placeholder=0
    let revNum=0;
    while(num!=0){
        let digit = num%10;
        
        num = Math.floor(num/10);
        
        revNum =revNum*10+digit;
        
        placeholder+=1;

    }
    return revNum;
}

function isPalindrome(num){
    return num==getNumReverse(num)?"palindrome":"not palindrome";
}

let num = 123;

console.log(num +" is "+ isPalindrome(num));