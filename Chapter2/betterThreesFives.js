
function betterThreesFives(start, end){
    for (var i = start; i <= end; i++){
        if (i % 3 == 0 && i % 5 == 0){
            continue;
        }
        else if (i % 3 == 0 || i % 5 == 0){
            console.log(i);
        }
    }
}

betterThreesFives(1,100)
