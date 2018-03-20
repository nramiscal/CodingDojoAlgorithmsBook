function ArrStack(){
    var arr = [];

    // adds a value to our stack
    this.push = function(value){
        arr[arr.length] = value;
        return this;
    }

    // remove and print the top val
    this.pop = function(){
        console.log(`The value at the top of the stack was ${arr[arr.length-1]}`);
        arr.length--;
        return this;
    }

    // print the number of stacked values
    this.size = function(){
        console.log(`The size of the stack is:`);
        return arr.length;
    }

    this.displayStack = function(){
        if (arr.length < 1){
            console.log(`The stack is empty.`);
        }
        for (var i = arr.length-1; i >=0; i--){
            console.log(arr[i]);
        }
        return this;
    }
}

var s = new ArrStack();
console.log(s.size()); // 0
s.push(1).push(2).push(3).push(4).push(5);
console.log(s.size()); // 5
