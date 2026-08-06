
/*Function to count digits using while loop*/
function getCountWhile (num){
    let digit=0;
    while(num!=0){
        
        digit++;
        num=Math.floor(num/10);
        
    }
    return digit;
}



/*Function to count digits using recursion */

function getCountRecursion (num){
    let digit=0;
    if(num==0)
        return 0;
    else {
        
        return 1+getCountRecursion(Math.floor(num/10))}

    
}


let input = 123;
let digCnt=getCountWhile(input);
let digCntRec=getCountRecursion(input);
console.log("Digits in number using loop "+input+ " is "+digCnt);
console.log("Digits in number using recursion "+input+ " is "+digCntRec);