function fibonacci(num){

    let sum = 1;
    let i = 0;
    let j = 1;

    while (num > 1){
        sum = i + j;
        i = j;
        j = sum;
        num--;
    }

    return sum;
}

console.log(fibonacci(7)) // 13
