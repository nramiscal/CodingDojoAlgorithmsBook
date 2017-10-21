
function threesFives(){
    for (var i = 100; i <= 400; i++){  // change 400 to 4000000 for solution
        if (i % 3 == 0 && i % 5 == 0){
            continue;
        }
        else if (i % 3 == 0 || i % 5 == 0){
            console.log(i);
        }
    }
}

threesFives()
