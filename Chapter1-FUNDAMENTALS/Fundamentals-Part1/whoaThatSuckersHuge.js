function whoaThatSuckersHuge(){
    var sum = 0;
    for (var i = -30000; i <= 300000; i++){
        if (i % 2 != 0){
            sum += i;
        }
    }
    return sum;
}

function whoaThatSuckersHugeToo(){
    var sum = 0;
    for (var i = -29999; i <= 29999; i+=2){
        sum+=i;
    }
    return sum;
}

whoaThatSuckersHugeToo()
