function fibonacci2(index) {
    var even = 0;
    var odd = 1;
    for(var i=1; i < index; i+=2) {
        even += odd;
        console.log(even);
        odd += even;
        console.log(odd);
    }
    if(index % 2 === 0) {
        return even;
    }
    else {
        return odd;
    }
}

fibonacci2(6)
