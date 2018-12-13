function messyMathMashup(num){
    var sum = 0;
    for (var i = 0; i <= num; i++){
        if (i == num/3){
            return -1;
        }
        else if (i % 7 == 0){
            sum += i*2;
        }
        else if (i % 3 == 0){
            continue;
        }
        else {
            sum += i;
        }
    }
    return sum;
}

messyMathMashup(4) // returns 7
messyMathMashup(8) // returns 34
messyMathMashup(15) // returns -1
