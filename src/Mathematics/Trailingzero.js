function trailingZeroFact(num){
    let zeroes = 0;
    for(let i=5;i<=num;i=i*5){
        zeroes=zeroes+num/i;
    }
    return zeroes;
}

let num =100;
console.log(trailingZeroFact(num));