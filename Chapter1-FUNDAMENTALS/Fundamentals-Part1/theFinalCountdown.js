function theFinalCountdown(mult,lowNum,highNum,skip){
    var num = lowNum;
    while (num < highNum){
        if (num % mult == 0 && num != skip){
            console.log(num);
        }
        num++;
    }
}

theFinalCountdown(3,5,17,9)
