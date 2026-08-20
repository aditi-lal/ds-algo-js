function findAllDivisor(num){
    let div=0;
    for (let i=1;i<=Math.sqrt(num);i++){
        if(num%i==0){
            console.log(i);
            div=num/i;
            if(div!=i)
                console.log(div);
        }
    }
}


findAllDivisor(100)